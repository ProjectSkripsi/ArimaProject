const moongose = require('mongoose')
const Schema = moongose.Schema
const invNum = require('invoice-number')
// const counter = require('./counter')
// Create a sequence

const distributionSchema = new Schema({
    dueDate: {
        type: Date, 
        // required: true 
    },
    agent: {
        type: Schema.Types.ObjectId,
        ref: 'Agent'
    },
    invoice: {
        type: String
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: String,
    subTotal: String,
    deleteAt : {
        type: Date,
        default: null
    }
},{
    timestamps: true
})

// distributionSchema.pre('save', function(next) {
//     console.log(`inithis`, counter);
    
//     var doc = this;
//     counter.findOneAndUpdate({
//         _id: 'distributionId'
//     }, {
//         $inc: { 
//             seq: 1
//         } 
//     }, function(error, counter)   {
//         if(error)
//         return next(error);
//         doc.invoice = counter.seq
//         next();
//     });
// });



const Distrbution = moongose.model('Distribution', distributionSchema);
module.exports = Distrbution
