import React from "react";
import "./Input.css";

export interface SubmitButtonProps {
  text?: string;
  disabled: boolean;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text = "Submit",
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className="input-btn"
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SubmitButton;