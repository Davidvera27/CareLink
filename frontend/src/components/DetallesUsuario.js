import React, { useState } from "react";
import GlobalHeader from "./GlobalHeader"; // Encabezado global
import "../styles/DetallesUsuario.css";
import { Card, Avatar, Button, Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined, EyeOutlined } from "@ant-design/icons";

const DetallesUsuario = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const showModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: <input type="checkbox" />,
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <input type="checkbox" />,
      width: "5%",
    },
    {
      title: "Profesional",
      dataIndex: "profesional",
      key: "profesional",
      width: "30%",
    },
    {
      title: "Tipo Reporte",
      dataIndex: "tipoReporte",
      key: "tipoReporte",
      width: "30%",
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
      width: "20%",
    },
    {
      title: "Acciones",
      key: "acciones",
      render: () => (
        <div className="acciones">
          <Button type="link" icon={<EyeOutlined />}>
            Ver
          </Button>
          <Button type="link" icon={<EditOutlined />}>
            Editar
          </Button>
        </div>
      ),
      width: "15%",
    },
  ];

  

  const data = [
    {
      key: "1",
      profesional: "Sara Manuela Gomez",
      tipoReporte: "Enfermería",
      fecha: "10/20/2024",
    },
    {
      key: "2",
      profesional: "Juan Pablo Ruiz",
      tipoReporte: "Ortopedia",
      fecha: "10/24/2024",
    },
  ];

  

  const modalData = {
    cirugias: {
      title: "Historial de cirugías del usuario",
      content: (
        <Table
          dataSource={[{ key: "1", fecha: "10/11/1998", observacion: "Apendicectomía" }]}
          columns={[
            { title: "Fecha de ocurrencia", dataIndex: "fecha", key: "fecha" },
            { title: "Observación", dataIndex: "observacion", key: "observacion" },
          ]}
          pagination={false}
        />
      ),
    },
    alergias: {
      title: "Historial de alergias a medicamentos",
      content: (
        <ul>
          <li>Penicilina</li>
          <li>Ibuprofeno</li>
        </ul>
      ),
    },
    otrasAlergias: {
      title: "Otras alergias",
      content: <p>No se registran otras alergias en el sistema.</p>,
    },
  };

  return (
    <div className="detalles-usuario-page">
      {/* Encabezado global */}
      <GlobalHeader />
      <div className="detalles-usuario-container">
        {/* Primera tarjeta */}
        <Card className="card-legacy" bordered={false}>
          <div className="head">
            <div className="title-wrapper">
              <span className="title">Datos básicos y de localización</span>
            </div>
            <div className="opciones">
              <Button className="opciones-button" icon={<EditOutlined />} type="text">
                Editar
              </Button>
              <Button className="opciones-button icon-only" icon={<DeleteOutlined />} type="text" />
            </div>
          </div>
          <div className="body">
            <Avatar
              className="avatar"
              size={140}
              src="https://via.placeholder.com/140"
              alt="Avatar"
            />
            <div className="datos">
              <div className="info-basica">
                <span className="nombre">JUAN ANTONIO LOPEZ ORREGO</span>
                <div className="merge">
                  <span>44567890</span>
                  <span>-</span>
                  <span>Masculino</span>
                  <span>-</span>
                  <span>1956/11/08</span>
                  <span>-</span>
                  <span>68 años</span>
                </div>
                <div className="merge">
                  <span>Casado</span>
                  <span>-</span>
                  <span>Pensionado</span>
                </div>
              </div>
              <div className="info-contacto">
                <span>CLL 45 - 60-20 INT 101</span>
                <div className="merge">
                  <span>315 6789 6789</span>
                  <span>-</span>
                  <span>juanantonio@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Segunda tarjeta */}
        <Card className="historia-clinica-card" bordered={false}>
          <div className="historia-clinica-head">
            <div className="historia-clinica-title-wrapper">
              <span className="historia-clinica-title">Historia Clínica</span>
            </div>
            <div className="historia-clinica-opciones">
              <Button className="historia-clinica-edit-button" icon={<EditOutlined />} type="text">
                Editar
              </Button>
              <Button
                className="historia-clinica-delete-button icon-only"
                icon={<DeleteOutlined />}
                type="text"
              />
            </div>
          </div>
          <div className="historia-clinica-body">
            <div className="historia-clinica-datos">
              <div className="esenciales">
                <span className="historia-clinica-titulo">Datos Esenciales</span>
                <div className="historia-clinica-merge">
                  <span>Empresa de Salud domiciliaria:</span>
                  <span>Sí</span>
                  <span className="historia-clinica-highlight">604 607 8990</span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Tipo de Sangre:</span>
                  <span>O+</span>
                  <span>Estatura:</span>
                  <span>165</span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Motivo de Ingreso:</span>
                  <span>Usuario de centro de día</span>
                </div>
              </div>
              <div className="discapacidad">
                <span className="historia-clinica-titulo">
                  Discapacidades, Apoyos y Limitaciones
                </span>
                <div className="historia-clinica-merge">
                  <span>Discapacidad:</span>
                  <span>Sí</span>
                  <span className="historia-clinica-highlight">Visual</span>
                  <span className="historia-clinica-highlight">Auditiva</span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Limitaciones:</span>
                  <span>Sí</span>
                  <span className="historia-clinica-highlight">Ayuda para ir al baño</span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Apoyos y Tratamientos:</span>
                  <span
                    className="historia-clinica-link"
                    onClick={() =>
                      showModal("Apoyos y Tratamientos", "Información de apoyos y tratamientos...")
                    }
                  >
                    Ver
                  </span>
                </div>
              </div>
              <div className="preexistencias">
                <span className="historia-clinica-titulo">Preexistencias y Alergias</span>
                <div className="historia-clinica-merge">
                  <span>Cirugías:</span>
                  <span>Sí</span>
                  <span
                    className="historia-clinica-link"
                    onClick={() => showModal(modalData.cirugias.title, modalData.cirugias.content)}
                  >
                    Ver
                  </span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Alergias a medicamentos:</span>
                  <span>Sí</span>
                  <span
                    className="historia-clinica-link"
                    onClick={() => showModal(modalData.alergias.title, modalData.alergias.content)}
                  >
                    Ver
                  </span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Otras Alergias:</span>
                  <span>Sí</span>
                  <span
                    className="historia-clinica-link"
                    onClick={() =>
                      showModal(modalData.otrasAlergias.title, modalData.otrasAlergias.content)
                    }
                  >
                    Ver
                  </span>
                </div>
              </div>
              <div className="habitos">
                <span className="historia-clinica-titulo">Hábitos y otros datos</span>
                <div className="historia-clinica-merge">
                  <span>Cafeína:</span>
                  <span>Sí</span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Alcoholismo:</span>
                  <span>No</span>
                </div>
                <div className="historia-clinica-merge">
                  <span>Maltrato:</span>
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Tercera tarjeta */}
        <Card className="reportes-clinicos-card" bordered={false}>
          <div className="card-head">
            <div className="title-wrapper">
              <span className="title">Reportes Clínicos</span>
            </div>
            <Button type="primary" icon={<PlusOutlined />} className="agregar-btn">
              Agregar
            </Button>
          </div>
          <div className="card-body">
            <Table columns={columns} dataSource={data} pagination={false} className="table" />
          </div>
        </Card>
      </div>

      {/* Modal */}
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[<Button key="ok" type="primary" onClick={handleModalClose}>OK</Button>]}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default DetallesUsuario;
