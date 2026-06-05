import React from "react";
import "./Input.css";

export interface Option {
  label: string;
  value: string;
}

export interface SelectDropdownProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <select
      className="input-select"
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    >
      <option value="">Select</option>

      {options.map((opt, index) => (
        <option key={index} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;