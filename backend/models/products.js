const mongoose = require('mongoose');

const ProductSchema = new Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    name:{
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
    image:{
        type: String
    },
    buyCount:{
        type: Number,
        required: true
    },
    offerCount:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('product', ProductSchema);