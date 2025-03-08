import LogoFull from "../../assets/images/logo-full.svg";

export default function Logo() {
  return (
    <div className="w-full flex justify-center">
      <img src={LogoFull} alt="Logo" width={209} height={50} loading="lazy" />
    </div>
  );
}
