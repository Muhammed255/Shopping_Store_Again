const Offer = require('../models/offer.model');

const offerController = {};
/**
 * Returning the list of Offer
 */
offerController.get = async (req, res, next) => {
    const { user, product } = req;
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getFullMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getFullMonth() + 1, 0);

    const query = {
        owner: user._id,
        product: product._id,
        start_date: {
            $gte: firstDay,
            $lt: lastDay
        },
        end_date: {
            $gte: firstDay,
            $lt: lastDay
        }
    };
    try {
        const offer = await Offer.find(query);
        return res.send({ offer });
    } catch (e) {
        next(e);
    }
}
