DROP TABLE IF EXISTS PatientsGuardian;

CREATE TABLE PatientsGuardian (
    id SERIAL PRIMARY KEY,
    id_usuario VARCHAR(255) NOT NULL,
    parentesco VARCHAR(255) NOT NULL,
    vive BOOLEAN NOT NULL,
    n_documento VARCHAR(255) UNIQUE NOT NULL,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    telefono VARCHAR(50),
    correo_electronico VARCHAR(255),
    marcadores JSON,
    FOREIGN KEY (id_usuario) REFERENCES Patients (id_usuario) ON DELETE CASCADE
);
