const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agentSchema = new Schema({
    name: {
        type: String
    },
    notelp: {
        type: String
    },
    address: {
        type: String
    },
    deleteAt: {
        type: Date,
        default: null
    },
},{
    timestamps: true
});

const Agent = mongoose.model('Agent', agentSchema);
module.exports = Agent