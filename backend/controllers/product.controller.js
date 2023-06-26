let Product = require("../models/product.model")
const mongoose = require("mongoose");
const {connection} = require ('../conf/connect')


/**
 * GET ALL PRODUCTS
 * @return all products
 */

exports.getAll = async (req,res) => {

    Product.find()
    .then((products)=>res.status(200).json(products))
    .catch((err)=>res.status(400).json(`Error: ${err}`))
}

exports.getProdById=async(req, res)
    


/**
 * Post new   PRODUCTS
 * @return all products
 */

exports.ajout = async(req,res)=>{

    const newProduct =new Product(req.body);
    newProduct.save()
    .then(()=>res.status(200).json(newProduct))
    .catch((err)=>res.status(400).json(`Error: ${err}`))
}

/**
 * Update PRODUCTS
 * 
 */

exports.update = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
  
    Product.findByidAndUpdate(id, updatedProduct, { new: true })
    .save()  
    .then((product) => {
        if (!product) {
          return res.status(404).json('Product not found');
        }
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json(`Error: ${err}`);
      });
  };
  

/**
 * DELETE PRODUCTS
 * 
 */

exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    Product.findByidAndDelete(id)

        .then((deletedProduct) => {
            res.status(200).json(deletedProduct);
        })
        .catch((error) => {
            res.status(500).json(`Error deleting product ` );
        });
  };
  