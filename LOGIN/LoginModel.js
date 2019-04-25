const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

const UserSchema = Schema({
    name: { type: String },
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String, required: true },
    joined: { type: Date, default: new Date() }
});

UserSchema.methods.isPasswordMatch = function (password, hashed, callback) {
    bcrypt.compare(password, hashed, (err, success) => {
        if (err) {
            return callback(err);
        }
        callback(null, success);
    });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
