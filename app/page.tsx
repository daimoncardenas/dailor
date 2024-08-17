"use client";
import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleCreateUser = () => {
    router.push("/create-user");
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <Layout title="Bienvenido">
      <p>
        Este es el sistema de administración de datos DAILOR SYSTEM. Aquí podrás
        gestionar la información de pacientes y usuarios de manera eficiente y
        segura.
      </p>

      <Button text="Crear Usuario" onClick={handleCreateUser} />

      <Button text="Iniciar Sesión" onClick={handleLogin} />
    </Layout>
  );
};

export default Home;
