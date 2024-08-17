"use client";

import React from "react";
import styles from "./components.module.scss";

interface HeaderProps {
  title: string;
  onClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onClick }: HeaderProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>DS</div>
          <h1>DAILOR SYSTEM</h1>
        </div>
      </header>
      {title === "Ingresar datos del paciente" && (
        <button className={styles.logoutButton} onClick={onClick}>
          Finalizar sesión
        </button>
      )}
    </>
  );
};

export default Header;
