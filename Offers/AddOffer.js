const Offer = require('../models/offer.model');

const offerController = {};

/**
 * Create New Offer
 */
offerController.create = async (req, res, next) => {
    const { name, description, price_before, price_after, image, start_date, end_date } = req.body;
    const newProduct = new Product({
        name,
        description,
        price_before,
        price_after,
        image,
        start_date,
        end_date,
        product: req.product,
        owner: req.user
    });

    try {
        const saved = await newOffer.save();
        return res.send({
            success: true,
            offer: saved
        })
    } catch (e) {
        next(e);
    }
}