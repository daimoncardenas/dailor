"use client";

import React from "react";
import Layout from "../../components/Layout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const PatientData = () => {
  return (
    <Layout title="Ingresar datos del paciente">
      <InputField
        label="Número de Documento"
        placeholder="Documento del paciente"
      />
      <Button text="Crear paciente" />
    </Layout>
  );
};

export default PatientData;
