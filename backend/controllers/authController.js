const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { firstName, middleName, lastName, email, password } = req.body;

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
  
    // Verifica si email o password no están definidos
    if (!email || !password) {
      return res.status(400).json({ message: "Correo y contraseña son obligatorios" });
    }
  
    try {
      // Busca el usuario por email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Usuario no encontrado" });
      }
  
      // Compara las contraseñas
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
      }
  
      // Genera un token JWT
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.status(200).json({ message: "Inicio de sesión exitoso", token });
    } catch (error) {
      console.error("Error en loginUser:", error); // Registra cualquier error en los logs del backend
      res.status(500).json({ message: "Error en el servidor", error });
    }
  };