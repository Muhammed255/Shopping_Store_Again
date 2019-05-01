const Offer = require('../models/offer.model');

const offerController = {};

/**
 * Updating Product
 */
offerController.update = async (req, res, next) => {
    const offer_id = req.params.offer_id;
    const { name, description, price_before, price_after, image, start_date, end_date, product } = req.body;

    try {
        const check = await Offer.findOne({ _id: offer_id });
        if (!check.owner.equals(req.user._id)) {
            const err = new Error('This offer object doesn\'t belong to you');
            err.status = 401;
            throw err;
        }
        const offer = await Offer.update({ _id: offer_id }, { name, description, price_before, price_after, image, start_date, end_date, product });
        return res.send({
            success: true,
            offer
        });
    } catch (e) {
        next(e);
    }
};