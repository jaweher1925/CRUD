const express = require('express');
const router =express.Router();
const Prod = require('../models/product.model');
const multer = require('multer');
const prod = require('../models/product.model');
const Product = require('../models/product.model');

//pour les image uploade 
filename ='';
const myStorage = multer.diskStorage({
    destination: './image',
    filename:(req ,file,redirect)=>{
        let date = Date.now();

        let fl =date + '.' +file.mimetype.split('/')[1];
        //78216518.png
        redirect(null , fl); //enregistrer l'image par le nom fl 
        filename=fl ;
    }   
})

const upload = multer({ storage: myStorage})

//ajout prod
exports.create = async (req,res)=> {
    const newProduct = new Product(req.body)
    // let data = req.body;
    // let product = new Prod(data);
    // product.date =new Date();
    // product.image =filename;
    console.log("newProduct",newProduct)
    newProduct.save().then(()=>res.json(newProduct))
    .catch((err) => res.status(400).json(err));
    // 
       
}


//afficher (get) all
router.get('/all',(req,res)=> {
    Prod.find({})
        .then(
            (prod)=>{
                res.status(200).send(prod);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )

})
 
//get by id (afficher % id)
router.getProdById('/getbyid/:id',(req,res)=> {
    let id = req.params.id

    Prod.findOne({ _id:id})
    .then(
        (prod)=>{
            res.status(200).send(prod);
        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err);
        }
    )


})
//supp % id
router.delete('/supprimer/:id',(req,res)=> {
    let id = req.params.id;

    Prod.findByIdAndDelete({ _id:id })
        .then(
            (prod)=>{
             res.status(200).send(prod);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
    
})


//modifier % id

router.put('/update/:id',upload.any('image'),(req,res)=> {
     let id = req.params.id
     let data =req.body;
     if (filename.length >0)
     {  
        prod.image =filename;
     }
   
    Prod.findByIdAndUpdate({_id:id}, data)
        .then(
            (prod)=>{
             filename='';
             res.status(200).send(prod);
            }
        )
        .catch(
            (err)=>{
                res.status(400).send(err);
            }
        )
})






module.exports =router;