import React, { useState } from "react";
import type { InputVariant } from "./TextInput";
import TextInput from "./TextInput";
import SelectDropdown from "./SelectDropdown";
import type { Option } from "./SelectDropdown";
import SubmitButton from "./SubmitButton";
import type { RadioOption } from "./RadioGroup";
import RadioGroup from "./RadioGroup";
import "./Input.css";

export interface InputGroupProps {
  options?: Option[];
  radioOptions?: RadioOption[];

  showDropdown?: boolean;
  showButton?: boolean;
  showRadio?: boolean;

  
  inputVariant: InputVariant;

  onSubmit?: (value: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  options = [],
  radioOptions = [],

  showDropdown = false,
  showButton = false,
  showRadio = false,

  inputVariant = "text",

  onSubmit,
}) => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");
  const [radio, setRadio] = useState("");

  const handleSubmit = () => {
    let finalValue = value;

    if (showDropdown) {
      finalValue += ` (${selected})`;
    }

    if (showRadio) {
      finalValue += ` [${radio}]`;
    }

    onSubmit?.(finalValue);
  };

  return (
    <div className="input-wrapper">

      
      <div className="input-row">
        <TextInput
          variant={inputVariant}   
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {showDropdown && (
          <SelectDropdown
            options={options}
            value={selected}
            onChange={setSelected}
          />
        )}
      </div>

      
      {showRadio && (
        <RadioGroup
          options={radioOptions}
          value={radio}
          onChange={setRadio}
        />
      )}


      {showButton && (
        <SubmitButton
          onClick={handleSubmit}
          disabled={!value}
        />
      )}
    </div>
  );
};

export default InputGroup;