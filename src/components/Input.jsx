export default function Input({
  type,
  name,
  defaultValue,
  labelText,
  inputClass,
  labelClass,
  value,
  onChange,
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
        defaultValue={defaultValue}
        className={inputClass}
        onChange={onChange}
      />
    </>
  );
}
