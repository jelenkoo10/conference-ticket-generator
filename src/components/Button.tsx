import React, { memo } from "react";

interface ButtonProps {
  className?: string;
  text: string;
  disabled?: boolean;
}

const Button = memo((props: ButtonProps) => {
  const { className, text, disabled } = props;

  return (
    <button className={className} disabled={disabled}>
      {text}
    </button>
  );
});

export default Button;
