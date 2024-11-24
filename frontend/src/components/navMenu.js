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
} from "@ant-design/icons";
import "../styles/navMenu.css";

const { SubMenu } = Menu;

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
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
  );
};

export default NavMenu;
