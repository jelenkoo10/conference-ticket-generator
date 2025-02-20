import LogoFull from "../../assets/images/logo-full.svg";
import LogoMark from "../../assets/images/logo-mark.svg";

export default function Logo() {
  return (
    <div className="w-full flex justify-center">
      <img src={LogoFull} alt="Logo" />
    </div>
  );
}
