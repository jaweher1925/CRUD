const router = require("express").Router();
const controller = require("../controllers/product.controller");
require("dotenv").config();
const DB_URI = process.env.DB_URI;



//obtenir tous les produits
router.get("/all",  controller.getAll);

router.getById("/getbyid",  controller.getProdById);

//create
router.post("/ajout",  controller.ajout);


//delete by ID
router.delete("/supprimer/:id",  controller.deleteProduct);

//update by ID
router.update("/update/:id",  controller.update);

module.exports =router;