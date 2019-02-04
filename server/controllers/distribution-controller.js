const Distribution = require('../models/Distribution')

module.exports = {

    createDist: (req, res) =>{
        Distribution.create({
            dueDate: req.body.dueDate,
            agent: req.body.agent,
            invoice: req.body.invoice,
            cart: req.body.cart,
        })
        .then(response =>{
            console.log(`control`, response);
            
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
        .populate('Product')
        .populate('cart.product')
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteDist: (req, res) =>{
		Distribution.deleteOne({
			_id: req.params.id
		})
		.then(response =>{
			res.status(200).json({
				msg:`Success Delete`,
				data: response
			})
		})
		.catch(err =>{
			res.status(500).json(err)
		})
	}
    
    
}