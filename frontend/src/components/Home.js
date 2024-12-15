import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Table, Button, Typography, Checkbox, Card, Row, Col } from "antd";
import Grafica1 from "../assets/Grafica1.jpg";
import Grafica2 from "../assets/Grafica2.jpg";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Tablero de Inicio", "1", <PieChartOutlined />),
  getItem("Gestión de Usuarios", "sub1", <UserOutlined />, [
    getItem("Nuevo Usuario", "2"),
    getItem("Agregar Acudiente", "3"),
    getItem("Detalles del Usuario", "4"),
  ]),
  getItem("Gestión de Actividades", "sub2", <DesktopOutlined />, [
    getItem("Opción 1", "5"),
    getItem("Opción 2", "6"),
    getItem("Opción 3", "7"),
  ]),
  getItem("Visitas Domiciliarias", "sub3", <TeamOutlined />, [
    getItem("Opción 1", "8"),
    getItem("Opción 2", "9"),
    getItem("Opción 3", "10"),
  ]),
  getItem("Administración", "11", <FileOutlined />),
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

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
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }} />
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
