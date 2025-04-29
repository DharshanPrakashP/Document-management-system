const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: String,
    description: String,
    created_at: { 
        type: Date,
        default: Date.now
    }
});

const CategoriesModel = mongoose.model('Categories', categoriesSchema);

module.exports = CategoriesModel;