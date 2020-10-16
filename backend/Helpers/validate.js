/**
 * Validates.
 * @param {*} field 
 * @returns a boolean.
 */
function validate(field) {
  if (field == undefined) {
    return true;
  }
  return false;
}

module.exports = { validate };