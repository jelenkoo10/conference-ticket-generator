export default function Input({
  type,
  name,
  defaultValue,
  labelText,
  inputClass,
  labelClass,
}) {
  return (
    <>
      <label htmlFor={name} className={labelClass}>
        {labelText}
      </label>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className={inputClass}
      />
    </>
  );
}
