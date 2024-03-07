const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotdev = require('dotenv');
const app = express();
dotdev.config({ path: './config.env' });
require("./connection");
app.use(express.json());
app.use(cors());


app.post("/postData", async (req, res) => {
    try {
        console.log(req.body);
    } catch (err) {
        console.log(err);
    }
    return res.send(req.body.data);
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server Start");
});