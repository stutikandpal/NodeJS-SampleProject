const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

const Product = mongoose.model('product',ProductSchema); // collection in database will be called plural of 'product' ie products
module.exports=Product;