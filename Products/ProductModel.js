const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductSchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    country_made: { type: String, required: true },
    image: { type: String, required: true },
    created: { type: Date, required: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
