import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import "../styles/Login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login"); // Tab activo (login o register)
  const [email, setEmail] = useState(""); // Cambiado de "username" a "email"
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(""); // Nuevo campo: Nombre 1
  const [middleName, setMiddleName] = useState(""); // Nuevo campo: Nombre 2
  const [lastName, setLastName] = useState(""); // Nuevo campo: Apellidos

  // Cambiar entre las pestañas de login y registro
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint =
      activeTab === "login"
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

    const payload =
      activeTab === "login"
        ? { email, password }
        : { email, password, firstName, middleName, lastName }; // Nuevos datos para registro

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (activeTab === "login") {
          localStorage.setItem("token", data.token); // Guarda el token JWT en el localStorage
          Swal.fire({
            icon: "success",
            title: "Inicio de sesión exitoso",
            text: "Bienvenido de nuevo.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "Ahora puedes iniciar sesión con tus credenciales.",
          });
          setActiveTab("login"); // Cambia al tab de login tras el registro
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message || "Error al procesar la solicitud",
        });
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "No se pudo conectar al servidor. Inténtalo más tarde.",
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="tabs">
          <button
            type="button"
            className={`tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabSwitch("login")}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={`tab ${activeTab === "register" ? "active" : ""}`}
            onClick={() => handleTabSwitch("register")}
          >
            Registrar
          </button>
        </div>

        <div className="inputs">
          {activeTab === "register" && (
            <>
              <div className="input-group">
                <UserOutlined className="input-icon" />
                <input
                  type="text"
                  placeholder="Primer Nombre"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <UserOutlined className="input-icon" />
                <input
                  type="text"
                  placeholder="Segundo Nombre"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </div>

              <div className="input-group">
                <UserOutlined className="input-icon" />
                <input
                  type="text"
                  placeholder="Apellidos"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </>
          )}

          <div className="input-group">
            <UserOutlined className="input-icon" />
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <LockOutlined className="input-icon" />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button className="login-button" type="submit">
          {activeTab === "login" ? "Iniciar sesión" : "Registrar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
