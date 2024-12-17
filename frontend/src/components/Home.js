import React from "react";
import {

  UserOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  SettingFilled,
  LogoutOutlined,
  SettingOutlined,
  HomeOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Badge, Table, Button, Typography, Checkbox, Card, Row, Col } from "antd";
import Grafica1 from "../assets/Otros/Grafica1.jpg";
import Grafica2 from "../assets/Otros/Grafica2.jpg";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Home = () => {

  const attendanceData = [
    { key: "1", user: "Sara Manuela Gómez", serviceType: "Centro día", status: "Asistió", statusColor: "green" },
    { key: "2", user: "Juan Pablo Ruiz", serviceType: "Centro día", status: "Pendiente", statusColor: "gray" },
  ];

  const userFlowData = [
    { key: "1", user: "Francisco Javier Benavides", contracts: "Ver", visits: 5 },
    { key: "2", user: "Nombre usuario", contracts: "Ver", visits: 10 },
    { key: "3", user: "Nombre usuario", contracts: "Ver", visits: 20 },
  ];

  const activitiesData = [
    { key: "1", activity: "Ping Pong", date: "Dentro de 7 días" },
    { key: "2", activity: "Yoga", date: "Dentro de 7 días" },
    { key: "3", activity: "Arte", date: "Dentro de 7 días" },
  ];

  const columnsAttendance = [
    { title: "", dataIndex: "checkbox", key: "checkbox", render: () => <Checkbox /> },
    { title: "Usuario", dataIndex: "user", key: "user" },
    { title: "Tipo de servicio", dataIndex: "serviceType", key: "serviceType" },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <div>
          <span style={{ backgroundColor: record.statusColor, borderRadius: "50%", display: "inline-block", width: 10, height: 10, marginRight: 8 }}></span>
          {text}
        </div>
      ),
    },
    {
      title: "Acciones",
      key: "actions",
      render: () => (
        <span>
          <Button type="link">Ver</Button> | <Button type="link">Marcar asistencia</Button>
        </span>
      ),
    },
  ];

  const columnsUserFlow = [
    { title: "Usuario", dataIndex: "user", key: "user" },
    { title: "Contratos", dataIndex: "contracts", key: "contracts" },
    { title: "Visitas del mes", dataIndex: "visits", key: "visits" },
  ];

  const columnsActivities = [
    { title: "Actividad", dataIndex: "activity", key: "activity" },
    { title: "Fecha", dataIndex: "date", key: "date" },
    {
      title: "Acciones",
      key: "actions",
      render: () => (
        <span>
          <Button type="link">Editar</Button> | <Button type="link">Ver</Button>
        </span>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible style={{ backgroundColor: "#F1E6F5" }}>
  <div
    className="logo"
    style={{
      color: "#7F34B4",
      textAlign: "center",
      padding: "16px 0",
      fontWeight: "bold",
      fontSize: "16px",
    }}
  >

  </div>
  <Menu
    theme="light"
    defaultSelectedKeys={["1"]}
    mode="inline"
    style={{
      backgroundColor: "#FFFFFF",
      color: "#000000",
      fontWeight: "500",
    }}
  >
    <Menu.Item
      key="1"
      icon={<HomeOutlined style={{ color: "#7F34B4" }} />}
      style={{
        color: "#7F34B4",
        backgroundColor: "#EAD9F2",
      }}
    >
      Tablero de Inicio
    </Menu.Item>

    <Menu.SubMenu
      key="2"
      icon={<UserOutlined style={{ color: "#7F34B4" }} />}
      title={<span style={{ color: "#7F34B4" }}>Usuarios</span>}
    >
      <Menu.Item key="2.1" style={{ color: "#000000" }}>
        Nuevo Usuario
      </Menu.Item>
      <Menu.Item key="2.2" style={{ color: "#000000" }}>
        Nuevo Reporte Clínico
      </Menu.Item>
      <Menu.Item key="2.3" style={{ color: "#000000" }}>
        Lista de Usuarios
      </Menu.Item>
    </Menu.SubMenu>

    <Menu.Item
      key="3"
      icon={<CheckCircleOutlined style={{ color: "#7F34B4" }} />}
      style={{
        color: "#7F34B4",
        backgroundColor: "#EAD9F2",
      }}
    >
      Gestión de Actividades
    </Menu.Item>

    <Menu.SubMenu
      key="4"
      icon={<CalendarOutlined style={{ color: "#7F34B4" }} />}
      title={<span style={{ color: "#7F34B4" }}>Visitas Domiciliarias</span>}
    >
      <Menu.Item key="4.1" style={{ color: "#000000" }}>
        Visitas Programadas
      </Menu.Item>
      <Menu.Item key="4.2" style={{ color: "#000000" }}>
        Historial de Visitas
      </Menu.Item>
    </Menu.SubMenu>

    <Menu.SubMenu
      key="5"
      icon={<SettingOutlined style={{ color: "#7F34B4" }} />}
      title={<span style={{ color: "#7F34B4" }}>Administración</span>}
    >
      <Menu.Item key="5.1" style={{ color: "#000000" }}>
        Configuración General
      </Menu.Item>
      <Menu.Item key="5.2" style={{ color: "#000000" }}>
        Auditoría
      </Menu.Item>
    </Menu.SubMenu>
  </Menu>
</Sider>
      <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#22075E",
          padding: "0 16px",
          color: "#fff",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>
          Sistema de Gestión
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <SearchOutlined style={{ fontSize: "16px", color: "#fff" }} />
          <QuestionCircleOutlined style={{ fontSize: "16px", color: "#fff" }} />
          <Badge count={11} style={{ backgroundColor: "#FF4D4F" }}>
            <BellOutlined style={{ fontSize: "16px", color: "#fff" }} />
          </Badge>
          <SettingFilled style={{ fontSize: "16px", color: "#fff" }} />
          <LogoutOutlined style={{ fontSize: "16px", color: "#fff" }} />
        </div>
      </Header>
        <Content style={{ margin: "16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item>Tablero de Inicio</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Card title={<Title level={5}>Control de asistencia del día</Title>} extra={<Button type="primary">Agregar</Button>}>
              <Table dataSource={attendanceData} columns={columnsAttendance} pagination={false} />
            </Card>
            <div style={{ display: "flex", gap: 24 }}>
              <Card title={<Title level={5}>Flujo de usuarios</Title>} style={{ flex: 1 }}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <img src={Grafica1} alt="Gráfico Usuarios del Mes" style={{ width: "100%", height: "auto" }} />
                  </Col>
                  <Col span={12}>
                    <img src={Grafica2} alt="Gráfico Tasa de Asistencia" style={{ width: "100%", height: "auto" }} />
                  </Col>
                </Row>
                <Table dataSource={userFlowData} columns={columnsUserFlow} pagination={{ pageSize: 5 }} />
              </Card>
              <Card title={<Title level={5}>Actividades programadas</Title>} style={{ flex: 1 }}>
                <Table dataSource={activitiesData} columns={columnsActivities} pagination={{ pageSize: 5 }} />
              </Card>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
