const express = require('express');
const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");
const authenticateMiddleware = require("./middlewares/authenticate");


const app = express();

app.use(express.json());

app.use("/auth", AuthController)
app.use("/admin", authenticateMiddleware, AdminController);

app.listen(3001, ()=>{
    console.log('Server is running');
})