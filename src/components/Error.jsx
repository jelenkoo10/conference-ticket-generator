import { memo } from "react";
import IconErrorInfo from "../../assets/images/icon-info-error.svg";

const Error = memo((props) => {
  const { errorMessage } = props;

  return (
    <div className="flex gap-2 items-center mt-2 mb-8 text-[14px]">
      <img src={IconErrorInfo} alt="Info icon" />
      <span className="text-[var(--orange-700)] leading-none mt-0.5 max-[400px]:text-[10px]">
        {errorMessage}
      </span>
    </div>
  );
});

export default Error;
