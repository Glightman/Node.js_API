const express = require("express");

const UserModel = require("../models/User");

const router = express.Router();

router.post("/register", async(req, res) => {
    const {email} = req.body;
    if(await UserModel.findOne({email})){
        return res.status(400).json({
            error: true,
            message: "Usuário já existe com este email!"
        })
    }

    const User = await UserModel.create(req.body);

    User.password = undefined;
    console.log(req.body);
    return res.json({
        error: false,
        message: "Resgistrado com sucesso!",
        data: User
    });
})

module.exports = router;