const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategorySchema = Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
