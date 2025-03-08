import { useState, memo } from "react";
import Error from "./Error";

const Input = memo((props) => {
  const {
    type,
    name,
    placeholder,
    labelText,
    inputClass,
    labelClass,
    value,
    onChange,
    error,
  } = props;
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
});

export default Input;
