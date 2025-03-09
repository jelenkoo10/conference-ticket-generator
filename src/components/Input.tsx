import React, { useState, memo, ChangeEvent, forwardRef } from "react";
import Error from "./Error";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  labelText: string;
  inputClass?: string;
  labelClass?: string;
  value?: string | File | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      name,
      placeholder,
      labelText,
      inputClass,
      labelClass,
      value,
      onChange,
      error,
    },
    ref
  ) => {
    const [entered, setEntered] = useState(false);

    return (
      <>
        <label htmlFor={name} className={labelClass}>
          {labelText}
        </label>
        <input
          ref={ref}
          name={name}
          type={type}
          value={type === "file" ? undefined : (value as string) ?? ""}
          placeholder={placeholder}
          className={`${inputClass} ${!entered || !error ? "mb-8" : ""}`}
          onChange={(e) => {
            onChange(e);
            if (!entered) {
              setEntered(true);
            }
          }}
        />
        {error && entered ? <Error errorMessage={error} /> : null}
      </>
    );
  }
);

export default memo(Input);
