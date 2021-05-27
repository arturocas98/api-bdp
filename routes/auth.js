const router = require("express").Router();
const User = require("../models/user");
const Joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**Validaciones schemas */

const schemaRegister = Joi.object({
  username: Joi.string().min(3).max(255).required(),
  // email: Joi.string().min(6).max(255).required().email(),
  password: Joi.string().min(6).max(1024).required(),
});

const schemaLogin = Joi.object({
  username: Joi.string().min(6).max(255).required(),
  password: Joi.string().min(6).max(1024).required(),
});

/**Ruta post Login */

router.post("/token", async (req, res) => {
  // const { error } = schemaLogin.validate(req.body);
  // if (error) return res.status(400).json({ error: error.details[0].message });
  // console.log(req.query.client_id);
  const user = await User.findOne({ _id: req.query.client_id,client_secret:req.query.client_secret });
  if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

  // const validPassword = await bcrypt.compare(req.body.password, user.password);
  // if (!validPassword)
    // return res.status(400).json({ error: "contraseña no válida" });
  const token = jwt.sign(
    {
      username: user.username,
      id: user._id,
    },
    process.env.TOKEN_SECRET,{
      expiresIn:3600,
    }
  );
  const verificar = jwt.verify(token,process.env.TOKEN_SECRET);

  res.header("Authorization", token).json({
    error: null,
    access_token :  token ,
    expires_in: verificar.exp
  });
});

/**Ruta post register */

router.post("/register", async (req, res) => {
  //Validaciones de usuario

  // validate user
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // const isEmailExist = await User.findOne({ email: req.body.email });
  // if (isEmailExist) {
  //   return res
  //     .status(400)
  //     .json({ error: true, message: "Email ya registrado" });
  // }

  const isUsernameExist = await User.findOne({ username: req.body.username });
  if (isUsernameExist) {
    return res
      .status(400)
      .json({ error: true, message: "El usuario ya esta registrado" });
  }

  // hash contraseña
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);
  const generate = Math.random().toString(36^6).substring(2);
  const user = new User({
    username: req.body.username,
    // email: req.body.email,
    password: password,
    client_secret: generate
  });

  try {
    const userDB = await user.save();
    res.json({
      error: null,
      data: userDB,
    });
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
