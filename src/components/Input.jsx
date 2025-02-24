import { useState } from "react";
import Error from "./Error";

export default function Input({
  type,
  name,
  placeholder,
  labelText,
  inputClass,
  labelClass,
  value,
  onChange,
  error,
}) {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {labelText}
      </label>
      <input
        name={name}
        type={type}
        value={type === "file" ? undefined : value}
        placeholder={placeholder}
        className={`${inputClass} ${!entered || !error ? "mb-8" : null}`}
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
