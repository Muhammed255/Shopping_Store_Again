const Offer = require('../models/offer.model');

const offerController = {};

/**
 * Deleting an Offer
*/
offerController.destroy = async (req, res, next) => {
    const offer_id = req.params.offer_id;
    try {
        await Offer.deleteOne({ _id: offer_id });
        res.send({ success: true });
    } catch (e) {
        next(e);
    }
}
