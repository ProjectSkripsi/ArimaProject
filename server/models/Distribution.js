const moongose = require('mongoose')
const Schema = moongose.Schema
const shortid = require('shortid');
const distributionSchema = new Schema({
    dueDate: {
        type: Date, 
        required: true 
    },
    agent: {
        type: Schema.Types.ObjectId,
        ref: 'Agent'
    },
    invoice: {
        type: String,
        unique: true,
        default: shortid.generate
    },
    product: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    quantity: String,
    subTotal: String,
    deleteAt : {
        type: Date,
        default: null
    }
},{
    timestamps: true
})




const Distrbution = moongose.model('Distribution', distributionSchema);
module.exports = Distrbution
