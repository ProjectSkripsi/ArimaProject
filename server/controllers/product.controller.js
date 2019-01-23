const Product = require('../models/Product')

module.exports = {
    addProduct: (req, res) =>{
        let productCode = req.body.productCode
        let productName = req.body.productName
        let price = req.body.price
        let description = req.body.description
        Product.find({ productCode: productCode })
        .then(response =>{
            if(response.length === 0){
                Product.create({
                    productCode,
                    productName,
                    price,
                    description
                })
                .then(newProduct =>{
                    res.status(201).json({
                        err: false,
                        msg: `Success add ${newProduct.productName}`,
                        data: newProduct
                    })
                })
                .catch(err =>{
                    res.status(500).json({
                        msg: `Please input product data incorrect`
                    })
                })
            } else {
                res.status(400).json({
                    msg: `Product already registered, try again!`
                })
            }
        })
        .catch(err =>{
            res.status(500).json(err)
            console.log(err);
            
        })
    },

    findAll: (req, res) =>{
        Product.find({})
        .sort([['productCode', 'ascending']])
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
            console.log(err);
        })
    },

    findProduct: (req, res) =>{
        Product.findById({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    editProduct: (req, res)=>{
        Product.updateOne({
            _id: req.params.id
        },{
            productCode : req.body.productCode,
            productName : req.body.productName,
            price : req.body.price,
            description : req.body.description
        })
        .then(response =>{
            res.status(200).json({
                msg: `Success Update`,
                data: response
            })
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteProduct: (req, res) =>{
        Product.deleteOne({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
}