const Agent = require('../models/Agent')

module.exports = {
    addAgent: (req, res) =>{
        Agent.create({
            name: req.body.name,
            notelp: req.body.notelp,
			address: req.body.address
		})
		.then(response =>{
			res.status(201).json(response)
			console.log(response);
		})
		.catch(err =>{
			res.status(500).json(err)
		})
	},

	findAll: (req, res) =>{
		Agent.find({})
		.then(response =>{
			res.status(200).json(response)
			console.log(`all agent`);
			
		})
		.catch(err =>{
			res.status(500).json(err)
		})
	},
	
	findAgent: (req, res) =>{
		Agent.findById({
			_id: req.params.id
		})
		.then(response =>{
			res.status(200).json(response)
		})
		.catch(err =>{
			res.status(500).json(err)
		})
	},

	editAgent: (req, res) =>{
		Agent.updateOne({
			_id: req.params.id
		},{
			name: req.body.name,
			notelp: req.body.notelp,
			address: req.body.notelp
		})
		.then(response =>{
			res.status(200).json({
				msg:`Success Update`,
				data: response
			})
		})
		.catch(err =>{
			res.status(500).json(err)
		})
	},

	deleteAgent: (req, res) =>{
		Agent.deleteOne({
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