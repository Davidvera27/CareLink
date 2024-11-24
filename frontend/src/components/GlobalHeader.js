import React, { useEffect, useState } from "react";
import "../styles/GlobalHeader.css";
import avatar from "../assets/avatar.jpg";
import { NotificationOutlined, LogoutOutlined } from "@ant-design/icons";

const GlobalHeader = () => {
  const [userName, setUserName] = useState("Andrea Salazar");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(`${user.firstName} ${user.lastName}`);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/"; // Redirige al inicio de sesión
  };

  return (
    <div className="global-header-container">
      <header className="global-header">
        <div className="logo">
          <h1>Sistema de Gestión</h1>
        </div>
        <div className="toolbar">
          <div className="icon-wrapper">
            <NotificationOutlined />
          </div>
          <div className="badge-icon">
            <div className="badge-wrapper">
              <span className="badge">11</span>
            </div>
          </div>
          <div className="user-wrapper">
            <img src={avatar} alt="User Avatar" />
            <span className="user-name">{userName}</span>
            <div className="icon-wrapper" onClick={handleLogout}>
              <LogoutOutlined />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default GlobalHeader;
