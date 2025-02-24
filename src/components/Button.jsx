export default function Button({ className, text, disabled }) {
  return (
    <button className={className} disabled={disabled}>
      {text}
    </button>
  );
}
