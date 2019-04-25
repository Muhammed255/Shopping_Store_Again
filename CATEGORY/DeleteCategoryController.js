const Category = require('../models/category.model');

const categoryController = {};

/**
 * Deleting a Category
*/
categoryController.destroy = async (req, res, next) => {
    const category_id = req.params.category_id;
    try {
        await Category.deleteOne({ _id: category_id });
        res.send({ success: true });
    } catch (e) {
        next(e);
    }
}
