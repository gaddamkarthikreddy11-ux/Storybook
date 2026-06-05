import React from "react";
import "./Input.css";

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value: string;
  name?: string;
  onChange?: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  name = "radio-group",
  onChange,
}) => {
  return (
    <div className="radio-group">
      {options.map((opt, index) => (
        <label key={index} className="radio-label">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange?.(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;