import { memo } from "react";

const Button = memo((props) => {
  const { className, text, disabled } = props;

  return (
    <button className={className} disabled={disabled}>
      {text}
    </button>
  );
});

export default Button;
