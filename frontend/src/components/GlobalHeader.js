import React from "react";
import "../styles/GlobalHeader.css";
import avatar from "../assets/avatar.jpg";
import { NotificationOutlined, LogoutOutlined } from "@ant-design/icons";

const GlobalHeader = () => {
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
            <span className="user-name">Andrea Salazar</span>
            <div className="icon-wrapper">
              <LogoutOutlined />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default GlobalHeader;
