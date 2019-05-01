const Product = require('../models/product.model');

const productController = {};


/**
 * Deleting a Product
*/
productController.destroy = async (req, res, next) => {
    const product_id = req.params.product_id;
    try {
        await Product.deleteOne({ _id: product_id });
        res.send({ success: true });
    } catch (e) {
        next(e);
    }
}
