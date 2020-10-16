const{ response,validate,queryFunction} = require('../Helpers');

/**
 * Gets questions from DB.
 * @returns the data stored in the question table.
 */ 
async function getQuestions(data){
    
    if(validate.validate(data.id)){
        return response(400,"Category id is required.", data);
    }

    const sql = "CALL getQuestions(?)";

    return queryFunction(sql, [data.id]).then((result) => {
        return response(200, 'Here are your questions.', result[0]);
    }).catch(error => {
        return response(400, 'Could not get questions requested.', error.sqlMessage);
    })
}

/**
 * stores answers
 * @param {*} data   
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function addAnswer(data) {
   
    if(validate.validate(data.user_answer)){
        return response(400,"An answer to question is required", data);
    }
    if(validate.validate(data.id_user)){
        return response(400,"user id is required");
    }
    if(validate.validate(data.id_bus)){
        return response(400,"business id is required");
    }

    if(validate.validate(data.id_que)){
        return response (400," question id  is required");
    }

    let sql = 'CALL postAnswers(?)'
    
    return queryFunction(sql, [data.user_answer, data.id_user, data.id_que, data.id_bus]).then((result) => {
        return response(201,'Thank you for answering');
    }).catch(error => {
        return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

/**
 * stores answers
 * @param {*} data   
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function modifyAnswer(data) {
   
    if(validate.validate(data.answer_user)){
        return response(400,"A modified answer is required", data);
    }
    if(validate.validate(data.b_id)){
        return response(400,"business id is required");
    }
    if(validate.validate(data.u_id)){
        return response (400,"user id is required");
    }

    let sql = 'CALL updateAnswer(?)'
    
    return queryFunction(sql, [data.answer_user, data.b_id, data.u_id]).then((result) => {
        return response(201,'Thank you for updating your answer');
    }).catch(error => {
        return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}



/**
 * Gets answers from DB.
 * @returns the data stored in the answers table.
 */ 
async function getAnswers(data){
    
    if(validate.validate(data.id)){
        return response(400,"Business id is required.", data);
    }

    const sql = "CALL getAnswers(?)";

    return queryFunction(sql, [data.id]).then((result) => {
        return response(200, 'Here are your answers .', result[0]);
    }).catch(error => {
        return response(400, 'Could not get answers requested.', error.sqlMessage);
    })
}
module.exports = { getQuestions, addAnswer , modifyAnswer ,getAnswers };