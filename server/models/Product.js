const moongose = require('mongoose')
const Schema = moongose.Schema

const productSchema = new Schema({
    productCode: String,
    productName: String,
    price: String,
    description: String,
    deleteAt: {
        type: Date,
        default: null
    }
},{
    timestamps: true
})

const Product = moongose.model('Product', productSchema);
module.exports = Product