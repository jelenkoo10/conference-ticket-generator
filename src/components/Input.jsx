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
        className={`${inputClass} ${!error ? "mb-8" : null}`}
        onChange={onChange}
      />
      {error ? <Error errorMessage={error} /> : null}
    </>
  );
}
