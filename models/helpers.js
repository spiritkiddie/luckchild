
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Data = require('../models/model');
const Admin = require('../models/model');

module.exports.checkUserExit = function (email, callback) {
    let query = { Email: email };
    Data.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    newUser.save(callback);
}

module.exports.getUsername = function (candidate, callback) {
    let query = {username: candidate};
    Admin.findOne(query, callback);
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports.createNewAdmin = function (admin, callback) {
     bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(admin.password, salt, function( err, hash ) {
            admin.password = hash;
            admin.save(callback);
        });
    });
}