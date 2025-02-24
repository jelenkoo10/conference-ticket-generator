import IconErrorInfo from "../../assets/images/icon-info-error.svg";

export default function Error({ errorMessage }) {
  return (
    <div className="flex gap-2 items-center mt-2 mb-8 text-[14px]">
      <img src={IconErrorInfo} alt="Info icon" />
      <span className="text-[var(--orange-700)] leading-none mt-0.5">
        {errorMessage}
      </span>
    </div>
  );
}
