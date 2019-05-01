const mongoose = require('mongoose');

const { Schema } = mongoose;

const OfferSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price_before: { type: Number, required: true },
    price_after: { type: Number, required: true },
    image: { type: String, required: true },
    created: { type: Date, required: true },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Offer = mongoose.model('Offer', OfferSchema);
module.exports = Offer;