const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { firstName, middleName, lastName, email, password } = req.body;
    
    // Log para depurar los datos que llegan desde el frontend
    console.log("Datos recibidos del frontend:", req.body);

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const user = new User({ firstName, middleName, lastName, email, password });
        await user.save();

        res.status(201).json({ message: "Usuario registrado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

  
  exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Credenciales inválidas" });
      }
  
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Credenciales inválidas" });
      }
  
      res.status(200).json({ message: "Inicio de sesión exitoso", token: "JWT_TOKEN_PLACEHOLDER" });
    } catch (error) {
      res.status(500).json({ message: "Error en el servidor", error });
    }
  };
