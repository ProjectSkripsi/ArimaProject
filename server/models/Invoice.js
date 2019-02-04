const moongose = require('mongoose')
const Schema = moongose.Schema
const shortid = require('shortid');

const invoiceSchema = new Schema({
    invoice: {
        type: String,
        unique: true,
        default: shortid.generate
    },
    
})