const Distribution = require('../models/Distribution')

module.exports = {
    createDist: (req, res) =>{
        Distribution.create({
            dueDate: req.body.date,
            agent: req.body.agent,
            invoice: req.body.invoice,
            product: req.body.product,
            quatity: req.body.quatity,
            subTotal: req.body.subTotal
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
            console.log(`iniyagng`, err);
            
        })
    },

    getAllDist: (req, res) =>{
        Distribution.find({})
        .populate('agent')
        .populate('product')
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    
}