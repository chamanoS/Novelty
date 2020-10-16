/** 
 * This function receives an object then trims all of the object's properties/values 
 * and return the trimmed object
 * @param {object} object
 * @return {object}
 */
function trimObjValues(obj) {
  return Object.keys(obj).reduce((acc, curr) => {
    acc[curr] = obj[curr].trim();
    return acc;
  }, {});
}

/** 
 * This function receives an object and that object's key then convert the object's 
 * properties/values to lovercase and return the lowercase object's properties/values
 * @param {object} object
 * @param {any} key
 * @return {object}
 */
function lowerObjValue(obj, key) {
  obj['' + key] = obj['' + key].toLowerCase ();
  return obj;
}

/** 
 * This function receives a string and trims the whitespace on at the start of the 
 * string and at the end of the string then return the trimmed string
 * @param {string} string
 * @return {string} 
 */
function trimString(string) {
  return string.trim();
}

module.exports = {trimObjValues, lowerObjValue, trimString};