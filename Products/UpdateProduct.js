const Product = require('../models/product.model');

const productController = {};

/**
 * Updating Product
 */
productController.update = async (req, res, next) => {
    const product_id = req.params.product_id;
    const { name, description, price, country_made, image, created, category } = req.body;

    try {
        const check = await Product.findOne({ _id: product_id });
        if (!check.owner.equals(req.user._id)) {
            const err = new Error('This product object doesn\'t belong to you');
            err.status = 401;
            throw err;
        }
        const product = await Product.update({ _id: product_id }, { name, description, price, country_made, image, created, category });
        return res.send({
            success: true,
            product
        });
    } catch (e) {
        next(e);
    }
};
