/**
 * A response.
 * @param {*} status 
 * @param {*} message 
 * @param {*} data
 * @returns status, message, data. 
 */
function response(status, message, data=[]) {
    return { status, message, data}
}

module.exports = response;