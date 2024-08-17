"use client";
import React from "react";
import styles from "./components.module.scss";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
}

const InputField = ({ label, type = "text", placeholder }: InputFieldProps) => {
  return (
    <div className={styles.inputField}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputField;
