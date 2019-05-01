const Product = require('../models/product.model');

const productController = {};
/**
 * Returning the list of Product
 */
productController.get = async (req, res, next) => {
    const { user, category } = req;
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getFullMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getFullMonth() + 1, 0);

    const query = {
        owner: user._id,
        category: category._id,
        created: {
            $gte: firstDay,
            $lt: lastDay
        }
    };
    try {
        const product = await Product.find(query);
        return res.send({ product });
    } catch (e) {
        next(e);
    }
}
