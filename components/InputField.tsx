"use client";
import React from "react";
import styles from "./components.module.scss";
import 'dotenv/config'

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputFieldProps) => {
  
  console.log("ENVBACKEND",process.env.BACKEND_API)
  return (
    <div className={styles.inputField}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
