const express = require('express');
const AuthController = require("./controllers/AuthController");

const app = express();

app.use(express.json());

app.use("/auth", AuthController)

app.listen(3001, ()=>{
    console.log('Server is running');
})