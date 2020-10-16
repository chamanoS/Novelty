const{ response,validate,queryFunction,sendEmail,generateToken,verifyToken } = require('../Helpers');
const bcrypt = require ('bcryptjs');
const msg = require ('../config/bodyMessage');
const validator = require ('validator'); //import validator.js

/**
 * It register a user.
 * @param {*} data 
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function register(data) {
  if(validate.validate(data.first_name)) {
    return response(400, 'First name required');
  }
  if(validate.validate(data.last_name)) {
    return response(400, 'Last name required');
  }
  if(validate.validate(data.user_password)) {
    return response(400, 'Password is required');
  }
  //check if the string is an email.
  if(!validator.isEmail(data.email)) {
    return response(400, 'Please enter a valid email adress');
  }

  // `INSERT INTO users SET ?`
  let sql = 'CALL registerUser(?)';
  data.user_password = bcrypt.hashSync(data.user_password, 10); //password is hashed

  return queryFunction(sql, [data.first_name, data.last_name, data.email, data.user_password]).then( result => {
    //await mail.sendEmail(data.email, msg.registerMessage(result[0].first_name), msg.registerSubject());
    return response(201, 'Successfully created an account.' , data);
    })
    .catch(error => {
      //errno === 1062 is Duplicate entry 
      if (error.errno === 1062) {
        return response(400, 'Email already exist, try a diffrent email adress or request forgot password on login page', error.sqlMessage)
      }
      //http status of 500 = internal server error
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

/**
 * Logging in.
 * @param {*} data
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function login(data) {
  //check if the string is an email.
  if(!validator.isEmail(data.email)) {
    return response(400, 'Please enter a valid email adress');
  }
  if(validate.validate(data.user_password)) {
    return response(400, 'Password is required');
  }

  const sql = 'CALL loginUser(?)';

  return queryFunction(sql, data.email).then (async result => {
      const checkPassword = await bcrypt.compareSync(data.user_password,result[0][0].user_password);
      let info = {
        auth : true ,
        token : generateToken({id : result[0][0].id})
      }
      if(checkPassword) {
        return response(200, 'Logged in successfully.' , info);
      } else {
        return response(401, 'Incorrect password entered.', { auth: false, token: null });
      }
    }).catch(error => {
      return response(404, 'Incorrect email adress entered.', error);
    });
}

/**
 * Verifying a token provided by the user
 * @param {*} data 
 * data is a token string.
 * @returns a response that we have a user or not.
 */
async function verify(data) {
  
  if(validate.validate(data)) {
    return response(400, "No token provided.");
  }

  const sql = "CALL getUser(?)";

  return verifyToken(data).then(async (id) => {
    return queryFunction(sql, id.id).then(async (user) => {
      return response(200, "Signature verified, here is the payload data", user[0][0]);
    }).catch(error => {
      return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage)
    })
  }).catch(error => {
    return response(400, "Signature is invalid or token provided expired.", error);
  })
}

/**
 * If the user forgot their password.
 * @param {*} data 
 * data is an email [body] the user inserts.
 * @returns a queryResponse.
 */
async function forgot(data) {
  //check if the string is an email.
  if(!validator.isEmail(data.email)) {
    return response(400, 'Please enter a valid email adress');
  }

  const sql = 'CALL forgotPassword(?)';

  return queryFunction(sql, data.email).then(async (result) => {
    console.log(result[0].length)
      //check the length instead
      if(result[0].length > 0) {
        let token = generateToken({email: data.email});
        let link = process.env.LINK || 'http://localhost:4200/client/resetPassword/' + token;
        
       return sendEmail (
          data.email,
          msg.resetMessage(result[0][0].first_name, link),
          msg.resetSubject()
        ).then(handleEmail => {
          return response(200, "Thank you! Please check your email, we've sent you an email.");
        }).catch(error => {
          console.log(error)
          return response(500, "Oops, it seems we have a problem with our email server.");
        });
      }else{
        return response(400, 'User email does not exist!, Please enter a registered email address');
      }
    })
   
}

/**
 * If the user forgots the password.
 * User needs to reset their password.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function reset(data) {
  let sql = 'CALL resetPassword(?)';

  let userdata = await verifyToken(data.token)
  console.log(userdata)
  data.user_password = bcrypt.hashSync(data.user_password, 10);

  
  console.log(data)
  return queryFunction(sql, [userdata.email, data.user_password]).then(result => {
    console.log(result)
      return response(200, 'Successfully updated.');
    }).catch(error => {
      return response(400, 'Unsuccessful', error.sqlMessage);
    });
}

/**
 * Start point for tracking.
 * Add information on where is the user.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function start(data) {
  if(validate.validate(data.user_id)) {
    return response(400, 'user id required');
  }
  if(validate.validate(data.step)) {
    return response(400, "step required");
  }

  let sql = "CALL startTrack(?)";

  return queryFunction(sql, [data.user_id, data.step]).then(result => {
      return response(200, 'Successfully updated.', data);
    }).catch(error => {
      return response(400, 'Unsuccessful, could not update.', error.sqlMessage);
    });
}

/**
 * Updates the information as the user navigates.
 * Current routes updated
 * @param {*} data 
 * @returns a queryResponse.
 */
async function tracking(data) {
  if(validate.validate(data.user_id)) {
    return response(400, 'user id required');
  }
  if(validate.validate(data.step)) {
    return response(400, "step required");
  }

  let sql = "CALL tracking(?)";

  return queryFunction(sql, [data.user_id, data.step]).then(result => {
      return response(200, 'Successfully updated.', data);
    }).catch(error => {
      return response(400, 'Unsuccessful, could not update.', error.sqlMessage);
    });
}

/**
 * Update to an old user.
 * User won't go to the journey again.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function notNew(data) {
  if(validate.validate(data.user_id)) {
    return response(400, 'user id required');
  }

  let sql = "CALL notNewUser(?)";

  return queryFunction(sql, [data.user_id]).then(result => {
      return response(200, 'Successfully updated.');
    }).catch(error => {
      return response(400, "Unsuccessful, could not update.", error.sqlMessage);
    });
}

/**
 * Checks the link that the user have.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function getLink(data) {
  if(validate.validate(data.id)) {
    return response(400, 'user id required');
  }

  let sql = "CALL getLink(?)";

  return queryFunction(sql, [data.id]).then(result => {
      return response(200, "Successfully have a step to the user.", result[0]);
    }).catch(error => {
      return response(400, 'Unsuccessful, could not get any step.', error.sqlMessage);
    });
}

/**
 * Adds/insert the user's first key.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function firstKey(data) {
  if(validate.validate(data.id)) {
    return response(400, 'user id required');
  }
  if(validate.validate(data.key)) {
    return response(400, 'key required');
  }

  let sql = "CALL firstKey(?)";

  return queryFunction(sql, [data.id, data.key]).then(result => {
      return response(200, 'Successfully inserted, first key.', data);
    }).catch(error => {
      return response(400, 'Unsuccessful, could not insert.', error.sqlMessage);
    });
}

/**
 * Gets the key that the user have.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function getKey(data) {
  if(validate.validate(data.id)) {
    return response(400, 'user id required');
  }

  let sql = "CALL getKeys(?)";

  return queryFunction(sql, [data.id]).then(result => {
      return response(200, "Successfully have a key to the user.", result[0]);
    }).catch(error => {
      return response(400, 'Unsuccessful, could not get any key.', error.sqlMessage);
    });
}

/**
 * Updates the key of the user.
 * @param {*} data 
 * @returns a queryResponse.
 */
async function accessKeys(data) {
  if(validate.validate(data.id)) {
    return response(400, 'user id required');
  }
  if(validate.validate(data.key)) {
    return response(400, 'key required');
  }

  let sql = "CALL accessKeys(?)";

  return queryFunction(sql, [data.id, data.key]).then(result => {
      return response(200, 'Successfully updated, access another joureny.', data);
    }).catch(error => {
      return response(400, 'Unsuccessful, could not update.', error.sqlMessage);
    });
}

module.exports = { register, login, forgot, reset, verify, start, getLink, tracking, notNew, firstKey, getKey, accessKeys };