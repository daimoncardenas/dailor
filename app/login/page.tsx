"use client";
import React from "react";
import Layout from "../../components/Layout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Layout title="Iniciar Sesión">
      <InputField label="Usuario" placeholder="Nombre Usuario" />
      <InputField label="Contraseña" type="password" placeholder="Contraseña" />
      <Button text="Ingresar" />
    </Layout>
  );
};

export default Login;
