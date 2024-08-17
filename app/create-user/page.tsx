"use client";
import React from "react";
import Layout from "../../components/Layout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const CreateUser = () => {
  return (
    <Layout title="Crear Usuario">
      <InputField label="Nombre" placeholder="Nombre Usuario" />
      <InputField label="Apellido" placeholder="Apellido Usuario" />
      <InputField label="Correo Electrónico" placeholder="Correo Usuario" />
      <InputField label="Contraseña" type="password" placeholder="Contraseña" />
      <Button text="Crear usuario" />
    </Layout>
  );
};

export default CreateUser;
