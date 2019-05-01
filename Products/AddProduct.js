const Product = require('../models/product.model');

const productController = {};

/**
 * Create New Product
 */
productController.create = async (req, res, next) => {
    const { name, description, price, country_made, image, created, category } = req.body;
    const newProduct = new Product({
        name,
        description,
        price,
        country_made,
        image,
        created,
        category: req.category,
        owner: req.user
    });

    try {
        const saved = await newProduct.save();
        return res.send({
            success: true,
            product: saved
        })
    } catch (e) {

    }
}
