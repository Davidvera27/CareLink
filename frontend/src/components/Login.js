// src/components/Login.js
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="tabs">
          <button className="tab active">Iniciar sesión</button>
          <button className="tab">Registrar</button>
        </div>

        <div className="inputs">
          {/* Campo de usuario */}
          <div className="input-group">
            <UserOutlined className="input-icon" />
            <input type="text" placeholder="username: admin or user" />
          </div>

          {/* Campo de contraseña */}
          <div className="input-group">
            <LockOutlined className="input-icon" />
            <input type="password" placeholder="password: ant.design" />
          </div>
        </div>

        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Recordarme
          </label>
          <a href="/" className="forgot-password">
            Recuperar
          </a>
        </div>

        <button className="login-button">Iniciar sesión</button>
      </form>

      <footer className="footer">
        <div className="footer-links">
          <a href="/">Ant Design Pro</a>
          <span>|</span>
          <a href="/">Ant Design</a>
        </div>
        <p>Copyright ©2020 Produced by Ant Finance Experience Technology Department</p>
      </footer>
    </div>
  );
};

export default Login;
