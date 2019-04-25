const Category = require('../models/category.model');

const categoryController = {};
/**
 * Returning the list of Category
 */
categoryController.get = async (req, res, next) => {
    const { user } = req;
    const query = { owner: user._id };
    try {
        const category = await Category.find(query);
        return res.send({ category });
    } catch (e) {
        next(e);
    }
}
