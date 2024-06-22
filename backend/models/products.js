const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    buycount:{
        type: Number,
        required: true
    },
    offercount:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('product', ProductSchema);