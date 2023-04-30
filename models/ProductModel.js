// 1. Import mongoose
const mongoose = require('mongoose');

// 2. Create the Schema
const ProductSchema = new mongoose.Schema({
        productName: {
            type: String,
            required: true
        },
        productModel: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        properties: {
            type: String,
            required: true
        },
});

// 3. Create the Model
const ProductModel = mongoose.model('products', ProductSchema);

// 4. Export the Model
module.exports = ProductModel;