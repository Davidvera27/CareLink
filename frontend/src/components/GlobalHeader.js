import React, { useEffect, useState } from "react";
import { Menu, Button } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  FileAddOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  SettingOutlined,
  SolutionOutlined,
  TeamOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../styles/GlobalHeader.css";
import avatar from "../assets/avatar.jpg";

const { SubMenu } = Menu;

const GlobalHeader = () => {
  const [userName, setUserName] = useState("Andrea Salazar");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(`${user.firstName} ${user.lastName}`);
    }
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="global-header-container">
      {/* Header */}
      <header className="global-header">
        <div className="logo">
          <h1>Sistema de Gestión</h1>
        </div>
        <div className="toolbar">
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

      {/* Sidebar and Main Content */}
      <div className={`menu-container ${collapsed ? "collapsed" : ""}`}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          className="collapse-btn"
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu mode="inline" inlineCollapsed={collapsed} className="menu">
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => handleNavigation("/home")}
          >
            Tablero de Inicio
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
            <Menu.Item
              key="2"
              icon={<FileAddOutlined />}
              onClick={() => handleNavigation("/Nuevo-Usuario")}
            >
              Nuevo Usuario
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<ProfileOutlined />}
              onClick={() => handleNavigation("/NuevoReporteClinico")}
            >
              Nuevo Reporte Clínico
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<TeamOutlined />}
              onClick={() => handleNavigation("/ListaUsuarios")}
            >
              Lista de Usuarios
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Gestión de Actividades"
          >
            <Menu.Item key="5">Opción 1</Menu.Item>
            <Menu.Item key="6">Opción 2</Menu.Item>
            <Menu.Item key="7">Opción 3</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            icon={<SolutionOutlined />}
            title="Visitas Domiciliarias"
          >
            <Menu.Item key="8">Opción 1</Menu.Item>
            <Menu.Item key="9">Opción 2</Menu.Item>
            <Menu.Item key="10">Opción 3</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<SettingOutlined />}
            title="Administración"
          >
            <Menu.Item key="11">Opción 1</Menu.Item>
            <Menu.Item key="12">Opción 2</Menu.Item>
            <Menu.Item key="13">Opción 3</Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Add children components or main view here */}
      </div>
    </div>
  );
};

export default GlobalHeader;
