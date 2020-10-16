const{ response,validate,queryFunction , log,verifyToken} = require('../Helpers');
const validator = require('validator');



/**
 * adds a business idea
 * @param {*} data   
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function addIdea(data) {

    if(validate.validate(data.busin_idea)){
        return response(400,"business idea is required");
    }
    if(validate.validate(data.descript)){
        return response (400,"business description is required");
    }
    if(validate.validate(data.id_user)){
        return response (400,"id_user is required");
    }

    let sql = 'CALL businessIdea(?)'

    return queryFunction(sql, [data.busin_idea, data.descript, data.id_user]).then(result => {
        return response(201,'you have successfully added an idea', result[0][0]);
    }).catch(error => {
        return response(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

/**
 * Execute a query using a stored procedure.
 * @param {*} data 
 * data is a params the user inserts.
 * @returns a queryResponse.
 */
async function listIdeas(data) {
    // checks if data.id is an interger
    if(!validator.isInt(data.id)){
        return response (400," id : is not an integer " );
    }

    let sql = 'CALL getIdeas(?)';
    
    return queryFunction(sql, data.id).then(async result => {
        
        return response(201,'getting all your ideas.', result[0]);

    }).catch(error => {
        return response(400, 'ideas or user id do not exist.', error);
    });
}

/**
 * Execute a query using a stored procedure.
 * @param {*} data 
 * data is a params the user inserts.
 * @returns a queryResponse.
 */
async function deleteIdea(data) {
    if(validate.validate(data.b_id)){
        return response (400,"business id is required");
    }

    if(validate.validate(data.u_id)){
        return response(400,"user id is required");
    }

    let sql = 'CALL deleteIdea(?)';
    
    return queryFunction(sql, [data.b_id , data.u_id]).then(result => {
        return response(201,'You have successfully deleted your idea');
    }).catch(error => {
        return response(400, 'cannot get the ideas', error);
    });
}

/**
 * update ratings of a business idea
 * @param {*} data   
 * data is a body the user inserts.
 * @returns a queryResponse.
 */
async function rate(data) {
   
    if(validate.validate(data.busin_id)){
        return response(400,"business id is required");
    }
    if(validate.validate(data.rate)){
        return response (400,"rate is required");
    }
    if(validate.validate(data.id_user)){
        return response (400,"id_user is required");
    }

    let sql = 'CALL rateBusinessIdea(?)'
    
    return queryFunction(sql, [data.rate, data.busin_id, data.id_user]).then(result => {
        return response(201,'You have successfully rated your idea.');
    }).catch(error => {
        return fieldResponse(500, 'Oops! we\'re experiencing some problems on our servers, please try again later!', error.sqlMessage );
    });
}

module.exports = {addIdea, listIdeas, deleteIdea, rate};