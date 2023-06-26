const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')
require('./conf/connect');
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const http = require('http').createServer(app);
app.use('/getimage',express.static('./image'));



const productRouter = require("./routes/product.router")


app.use("/api/prod",productRouter)

const { connection } = require('./conf/connect');
connection.once("open", () => {
    console.log("*** SERVER INIT ***");
});


//bech ma yetsakerch fi kol marra !!!


const PORT = process.env.PORT || 5000;
 http.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});