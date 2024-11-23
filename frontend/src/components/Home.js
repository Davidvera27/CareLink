import React, { useState } from "react";
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
  PlusCircleOutlined,
} from "@ant-design/icons";
import GlobalHeader from "./GlobalHeader"; // Importación del encabezado global
import "../styles/Home.css";

const { SubMenu } = Menu;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="home-page">
      <GlobalHeader />
      <div className="home-container">
        {/* Menú colapsable */}
        <div className={`menu-container ${collapsed ? "collapsed" : ""}`}>
          <Button
            type="primary"
            onClick={toggleCollapsed}
            className="collapse-btn"
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Menu mode="inline" inlineCollapsed={collapsed} className="menu">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Tablero de Inicio
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Usuarios">
              <Menu.Item key="2" icon={<FileAddOutlined />}>
                Nuevo Usuario
              </Menu.Item>
              <Menu.Item key="3" icon={<ProfileOutlined />}>
                Nuevo Reporte Clínico
              </Menu.Item>
              <Menu.Item key="4" icon={<TeamOutlined />}>
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
        <div className="content">
          {/* Tabla de control de asistencia */}
          <div className="card-legacy">
            <div className="card-header">
              <div className="title-wrapper">
                <h5 className="card-title">Control de asistencia del día</h5>
              </div>
              <div className="card-options">
                <Button icon={<PlusCircleOutlined />} className="add-button">
                  Agregar
                </Button>
              </div>
            </div>
            <div className="card-body">
              <div className="table">
                <div className="table-row header">
                  <div className="table-cell checkbox-header"></div>
                  <div className="table-cell">Usuario</div>
                  <div className="table-cell">Tipo servicio</div>
                  <div className="table-cell">Estado</div>
                  <div className="table-cell actions-header">Acciones</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <input type="checkbox" className="checkbox-input" />
                  </div>
                  <div className="table-cell">Sara Manuela Gómez</div>
                  <div className="table-cell">Centro día</div>
                  <div className="table-cell">
                    <span className="badge green">Asistió</span>
                  </div>
                  <div className="table-cell actions">
                    <span className="action-link">Ver</span>
                    <span className="divider">|</span>
                    <span className="action-link">Marcar asistencia</span>
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">
                    <input type="checkbox" className="checkbox-input" />
                  </div>
                  <div className="table-cell">Juan Pablo Ruiz</div>
                  <div className="table-cell">Centro día</div>
                  <div className="table-cell">
                    <span className="badge gray">Pendiente</span>
                  </div>
                  <div className="table-cell actions">
                    <span className="action-link">Ver</span>
                    <span className="divider">|</span>
                    <span className="action-link">Marcar asistencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
