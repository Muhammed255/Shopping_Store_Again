const Category = require('../models/category.model');

const categoryController = {};

/**
 * Updating Category
 */
categoryController.update = async (req, res, next) => {
    const category_id = req.params.category_id;
    const { name, description } = req.body;

    try {
        const category = await Category.update({ _id: category_id }, { name, description });
        return res.send({
            success: true,
            category
        });
    } catch (e) {
        next(e);
    }
};
