const User = require('../db/schema/user')


/**
 * Save a new user
 * @param {*} name 
 * @param {*} surname 
 * @param {*} birth_date 
 * @param {*} city 
 * @param {*} email 
 * @param {*} username 
 * @param {*} password 
 * @param {*} telephone 
 * @param {*} favourite_team 
 * @param {*} gender 
 * @returns 
 */
const saveUser = async (name, surname, birth_date, email, username, password, telephone, favourite_team, confirmation_code) => {
    let user = new User({
        name: name,
        surname: surname,
        birth_date: new Date(birth_date),
        email: email,
        username: username,
        password: password,
        telephone: telephone,
        favourite_team: favourite_team,
        confirmation_code: confirmation_code,
        creation_date: new Date(Date.now())
    });
    return user.save();
}

function updateUser(filter, fields) {
    return User.findOneAndUpdate(filter, fields);
}

/**
 * Gets an user for a given username
 * @param {*} username 
 * @returns 
 */
function getUser(username, password) {
  return User.findOne({username: username, password: password, confirmation_code: null}).lean();
}

function getUserByEmail(email) {
    return User.findOne({email: email.toLowerCase()}).lean();
}

function getUserByUsername(username) {
    return User.findOne({username: username.toLowerCase()}).lean();
}



function getOneUserByObjectFields(objectField) {
    return User.findOne(objectField).lean();
}

/**
 * Deletes an user for a given username
 * @param {*} username 
 * @returns 
 */
 const deleteUser = async (username) => {
    // mongo find query by chat id
    return User.deleteOne({ username: username });
}


function getUserListByObjectFields(objectFields, limit, skip) {
    return User.find(objectFields).limit(limit).skip(skip);
}

function getUserCountByObjectFields(objectFields) {
    return User.count(objectFields);
}

module.exports = {
    saveUser,
    getUser,
    getUserByEmail,
    updateUser,
    deleteUser,
    getOneUserByObjectFields,
    getUserListByObjectFields,
    getUserCountByObjectFields,
    getUserByUsername,
}

