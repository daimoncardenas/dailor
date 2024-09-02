"use client";

import React, { useState } from "react";
import Layout from "../../components/Layout";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { gql, useMutation } from "@apollo/client";
import 'dotenv/config'

const CREATE_USER_MUTATION = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      lastname
      firstname
      email
    }
  }
`;

const CreateUser = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("ENVBACKEND",process.env.BACKEND_API)

  const [createUser, { data, loading, error }] =
    useMutation(CREATE_USER_MUTATION);

  const handleCreateUser = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            firstname,
            lastname,
            email,
            password,
          },
        },
      });
      console.log("User created:", data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <Layout title="Crear Usuario">
      <InputField
        label="Nombre"
        placeholder="Nombre Usuario"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <InputField
        label="Apellido"
        placeholder="Apellido Usuario"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <InputField
        label="Correo Electrónico"
        placeholder="Correo Usuario"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Crear usuario" onClick={handleCreateUser} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <p>
          Usuario creado con éxito: {data.createUser.firstname}{" "}
          {data.createUser.lastname}
        </p>
      )}
    </Layout>
  );
};

export default CreateUser;
