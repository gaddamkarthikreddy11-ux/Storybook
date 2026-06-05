import React, { useState } from "react";
import "./Input.css";

export type InputVariant = "outline" | "filled" | "ghost";

export interface Option {
  label: string;
  value: string;
}

export interface InputProps {
  placeholder: string;
  type: "text" | "password" | "email" | "number" | "search";

  label: string;
  helperText: string;
  error: string;

  disabled: boolean;
  variant: InputVariant;

  showDropdown: boolean;
  options: Option[];

  showButton: boolean;
  buttonText: string;

  onSubmit: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder = "Enter text",
  type = "text",
  label,
  helperText,
  error,
  disabled = false,
  variant = "outline",

  showDropdown = false,
  options = [],

  showButton = false,
  buttonText = "Submit",

  onSubmit,
}) => {
  const [value, setValue] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  const handleSubmit = () => {
    const finalValue = showDropdown
      ? `${value} (${selected})`
      : value;

    onSubmit?.(finalValue);
  };

  return (
    <div className={`input-wrapper ${variant}`}>
      
      {label && <label className="input-label">{label}</label>}

      {/* INPUT + DROPDOWN (SIDE BY SIDE) */}
      <div className="input-row">
        <input
          className={`input ${error ? "input-error" : ""}`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
        />

        {showDropdown && (
          <select
            className="input-select"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select</option>

            {options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* BUTTON BELOW */}
      {showButton && (
        <button
          className="input-btn"
          onClick={handleSubmit}
          disabled={!value}
        >
          {buttonText}
        </button>
      )}

      {/* TEXT */}
      {error ? (
        <p className="error-text">{error}</p>
      ) : (
        helperText && (
          <p className="helper-text">{helperText}</p>
        )
      )}
    </div>
  );
};

export default Input;