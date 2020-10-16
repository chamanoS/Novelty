const { response, validate, domain} = require('../Helpers');
/**
 * Gets content from DB.
 * @returns the data stored in the content table.
 */
async function domainAvailability(data) {

    if (validate.validate(data.domain)) {
        return response(400, "Domain is required.");
    }
    let results = await domain.checkDomainAvailability(data.domain);
    //console.log(results)
    return response(200, "Domain check response", results);
}

module.exports = { domainAvailability }