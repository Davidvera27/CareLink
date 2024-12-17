import React, { useEffect, useState } from "react";
import { Menu, Button, Breadcrumb } from "antd";
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
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/GlobalHeader.css";
import avatar from "../assets/Profesional/avatar.jpg";

const { SubMenu } = Menu;

const breadcrumbNameMap = {
  "/home": "Tablero de Inicio",
  "/nuevo-usuario": "Nuevo Usuario",
  "/nuevo-usuario/agregar-acudiente": "Agregar Acudiente",
  "/detalles-usuario": "Detalles del Usuario",
  "/detalles-usuario/historia-clinica": "Historia Clínica",
};

const GlobalHeader = () => {
  const [userName, setUserName] = useState("Andrea Salazar");
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      title: (
        <a
          href={url}
          onClick={(e) => {
            e.preventDefault();
            navigate(url);
          }}
        >
          {breadcrumbNameMap[url] || url}
        </a>
      ),
    };
  });

  return (
    <div className="global-header-container">
      {/* Encabezado Global */}
      <header className="global-header">
        <div className="logo">
          <h1>Sistema de Gestión</h1>
        </div>
        <div className="toolbar">
          <div className="badge-icon">
            <span className="badge">11</span>
          </div>
          <div className="user-wrapper">
            <img className="avatar" src={avatar} alt="User Avatar" />
            <span className="user-name">{userName}</span>
            <div className="icon-wrapper" onClick={handleLogout}>
              <LogoutOutlined className="icon" />
            </div>
          </div>
        </div>
      </header>

      {/* Menú lateral */}
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
            onClick={() => navigate("/home")}
          >
            Tablero de Inicio
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
            <Menu.Item
              key="2"
              icon={<FileAddOutlined />}
              onClick={() => navigate("/nuevo-usuario")}
            >
              Nuevo Usuario
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<ProfileOutlined />}
              onClick={() => navigate("/nuevo-usuario/agregar-acudiente")}
            >
              Agregar Acudiente
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={<TeamOutlined />}
              onClick={() => navigate("/detalles-usuario")}
            >
              Detalles del Usuario
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

      {/* Contenido Principal */}
      <div className="main-content">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[{ title: <a href="/home">Inicio</a> }, ...breadcrumbItems]}
        />
        {/* Espacio para el contenido dinámico */}
      </div>
    </div>
  );
};

export default GlobalHeader;
