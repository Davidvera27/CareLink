import React from "react";
import GlobalHeader from "./GlobalHeader";
import "../styles/Home.css";
import Grafica1 from "../assets/Grafica1.jpg";
import Grafica2 from "../assets/Grafica2.jpg";
import { Card, Table, Button, Typography, Checkbox } from "antd";

const { Title } = Typography;

const Home = () => {
  const attendanceData = [
    {
      key: "1",
      user: "Sara Manuela Gómez",
      serviceType: "Centro día",
      status: "Asistió",
      statusColor: "green",
    },
    {
      key: "2",
      user: "Juan Pablo Ruiz",
      serviceType: "Centro día",
      status: "Pendiente",
      statusColor: "gray",
    },
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
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />,
    },
    {
      title: "Usuario",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Tipo de servicio",
      dataIndex: "serviceType",
      key: "serviceType",
    },
    {
      title: "Estado",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <div className="status">
          <span
            className={`status-dot ${record.statusColor}`}
            style={{
              backgroundColor:
                record.statusColor === "green" ? "#52c41a" : "#d9d9d9",
            }}
          ></span>
          {text}
        </div>
      ),
    },
    {
      title: "Acciones",
      key: "actions",
      render: () => (
        <span>
          <Button type="link">Ver</Button>
          <span className="divider">|</span>
          <Button type="link">Marcar asistencia</Button>
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
          <Button type="link">Editar</Button>
          <span className="divider">|</span>
          <Button type="link">Ver</Button>
        </span>
      ),
    },
  ];

  return (
    <div className="home-page">
      <GlobalHeader />
      <div className="home-container">
        {/* Card 1: Control de asistencia */}
        <Card className="card-legacy attendance-control" bordered>
          <div className="head">
            <div className="title-wrapper">
              <Title level={5}>Control de asistencia del día</Title>
            </div>
            <Button type="primary" className="add-button">
              Agregar
            </Button>
          </div>
          <div className="body">
            <Table
              dataSource={attendanceData}
              columns={columnsAttendance}
              pagination={false}
              className="attendance-table"
            />
          </div>
        </Card>

        {/* Row for Card 2 and Card 3 */}
        <div className="cards-row">
          {/* Card 2: Flujo de usuarios */}
          <Card className="card-legacy user-flow" bordered>
            <div className="head">
              <div className="title-wrapper">
                <Title level={5}>Flujo de usuarios</Title>
                <div className="more">
                  <Button type="link" icon={<i className="icon-more" />} />
                </div>
              </div>
            </div>
            <div className="body">
              <div className="horizontal-stats-block">
                <div className="stat-item">
                  <div className="stat-header">
                    Usuarios del mes
                    <span className="info-icon">
                      <i className="icon-info-circle" />
                    </span>
                  </div>
                  <div className="stat-body">
                    <h3 className="stat-value">100</h3>
                    <span className="stat-trend-value positive">17.1%</span>
                  </div>
                  <div className="stat-chart">
                    <img
                      src={Grafica1}
                      alt="Gráfico Usuarios del Mes"
                      className="stat-chart-image"
                    />
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-header">
                    Tasa de asistencia
                    <span className="info-icon">
                      <i className="icon-info-circle" />
                    </span>
                  </div>
                  <div className="stat-body">
                    <h3 className="stat-value">90%</h3>
                    <span className="stat-trend-value positive">26.2%</span>
                  </div>
                  <div className="stat-chart">
                    <img
                      src={Grafica2}
                      alt="Gráfico Tasa de Asistencia"
                      className="stat-chart-image"
                    />
                  </div>
                </div>
              </div>
              <div className="table-container">
                <Table
                  dataSource={userFlowData}
                  columns={columnsUserFlow}
                  pagination={{
                    defaultPageSize: 5,
                    showSizeChanger: false,
                    showQuickJumper: true,
                  }}
                  className="user-flow-table"
                />
              </div>
            </div>
          </Card>

          {/* Card 3: Actividades programadas */}
          <Card className="card-legacy scheduled-activities" bordered>
            <div className="head">
              <div className="title-wrapper">
                <Title level={5}>Actividades programadas</Title>
                <div className="more">
                  <Button type="link" icon={<i className="icon-more" />} />
                </div>
              </div>
            </div>
            <div className="body">
              <Table
                dataSource={activitiesData}
                columns={columnsActivities}
                pagination={{
                  defaultPageSize: 5,
                  showSizeChanger: false,
                  showQuickJumper: true,
                }}
                className="activities-table"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
