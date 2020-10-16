const{ response, validate, queryFunction } = require('../Helpers');

/**
 * Gets content from DB.
 * @returns the data stored in the content table.
 */ 
async function getContent(data) {
    
    if(validate.validate(data)){
        return response(400,"Category id is required.");
    }

    const sql = "CALL getContent(?)";
   
    return queryFunction(sql, data.id).then((result) => {
        return response(200, 'Here is the content you requested.', result[0]);
    }).catch(error => {
        return response(400, 'Could not get content.', error.sqlMessage);
    })
}

module.exports = { getContent }