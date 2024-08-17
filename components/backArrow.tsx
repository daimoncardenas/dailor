"use client";
import React from "react";
import styles from "./components.module.scss";

interface ArrowProps {
  text: string;
  onClick?: () => void;
}

const Arrow = ({ text, onClick }: ArrowProps) => {
  return (
    <button className={styles.arrow} onClick={onClick}>
      {text}
    </button>
  );
};

export default Arrow;
