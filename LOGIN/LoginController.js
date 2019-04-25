const jwt = require('jsonwebtoken');
const User = require('../models/users.model');

const userController = {};

/**
 * Login Logic
 */
userController.login = async (req, res, next) => {
    // Username and password in request
    const { email, password } = req.body;
    try {
        //Check username and password and return ok
        const user = await User.findOne({ email });
        if (!user) {
            const err = new Error(`The email ${email} was not found on our system`);
            err.status = 401;
            next(err);
        }

        user.isPasswordMatch(password, user.password, (err, matched) => {
            if (matched) {
                //JWT Secret
                const secret = process.env.JWT_SECRET;
                //JWT Expiration
                const expire = process.env.JWT_EXPIRATION;
                //Send The Token
                const token = jwt.sign({ _id: user._id }, secret, { expiresIn: expire });
                return res.send({ token });
            }

            res.status(401).send({ error: "Invalid Email/Password" });
        })
    } catch (e) {
        next(e);
    }


}

module.exports = userController;
