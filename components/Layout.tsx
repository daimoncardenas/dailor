"use client";

import React from "react";
import Header from "./Header";
import styles from "./components.module.scss";
import { useRouter } from "next/navigation";
import Arrow from "./backArrow";

const Layout = ({ title, children }: any) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className={styles.layout}>
        {title === "Iniciar Sesión" && <Arrow text="Volver" onClick={goBack} />}

        {title === "Crear Usuario" && <Arrow text="Volver" onClick={goBack} />}

        <Header title={title} onClick={goHome} />
        <h1>{title}</h1>
        <main className={styles.mainContent}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
