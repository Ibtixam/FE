import React, { ChangeEvent } from "react";
import "./style.css";

interface InputProps {
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
}


const Input: React.FC<InputProps> = (props) => {
  const { placeholder } = props;
  return (
    <div className="did-floating-label-content">
      <input
        className="did-floating-input"
        type="text"
        {...props}
        placeholder=" "
      />
      <label className="did-floating-label">{placeholder}</label>
    </div>
  );
};

export default Input;
