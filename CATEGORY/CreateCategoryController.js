const Category = require('../models/category.model');

const categoryController = {};

categoryController.create = async (req, res, next) => {
    const { name, description } = req.body;
    const newCategory = new Category({
        name,
        description,
        owner: req.user
    });

    try {
        const saved = await newCategory.save();
        return res.send({
            success: true,
            expense: saved
        })
    } catch (e) {

    }
}

module.exports = categoryController;
