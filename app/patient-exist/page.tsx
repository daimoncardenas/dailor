"use client";
import React from "react";
import Layout from "../../components/Layout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const PatientExists = () => {
  return (
    <Layout title="Ingresar datos del paciente">
      <InputField
        label="Número de Documento"
        placeholder="Documento del paciente"
      />
      <div className="error-message">
        Este paciente ya se encuentra creado en el sistema
      </div>
      <Button text="Crear paciente" />
    </Layout>
  );
};

export default PatientExists;
