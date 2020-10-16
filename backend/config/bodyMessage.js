/**
 * Body message for resetting a user's password.
 * @param {*} name 
 * name of the user.
 * @param {*} link 
 * redirects the user to a change password page.
 * @returns the body message for reset message.
 */
function resetMessage(name, link){
    return `<h2>Hi ${name}</h2>
    <p>Please click <a href="${link}">here</a> to reset your password </p>
    <p>Please ignore if you didn't try to reset your password on our platform</p>`;
}

/**
 * @returns a subject.
 */
function resetSubject() {
    return "Novelty | Forgot Password.";
}

module.exports = { resetMessage, resetSubject };
