import React from "react";
import "./Input.css";

export type InputVariant =
  | "text"
  | "password"
  | "email"
  | "search"
  | "textarea";

export interface TextInputProps {
  variant?: InputVariant;
  placeholder?: string;
  value?: string;

  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  variant = "text",
  placeholder = "Enter text",
  value,
  onChange,
}) => {
  if (variant === "textarea") {
    return (
      <textarea
        className="input textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }

  return (
    <input
      className="input"
      type={variant}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;