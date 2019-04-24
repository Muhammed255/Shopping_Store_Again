const User = require('../models/users.model');

const userController = {};


/**
 * Sign Up Logic
 */
userController.register = async (req, res, next) => {
    const newUser = new User({ name, email, password, joined });

    try {
        const user = await newUser.save();
        res.send({ user });
    } catch (e) {
        if (e.code === 11000 && e.name === 'MongoError') {
            var error = new Error(`Email Address ${newUser.email} is already token`);
            next(error);
        } else {
            next(e);
        }
    }

}
module.exports = userController;
