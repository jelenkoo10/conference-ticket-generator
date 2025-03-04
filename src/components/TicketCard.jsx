import TicketSvg from "../../assets/images/pattern-ticket.svg";
import LogoMark from "../../assets/images/logo-mark.svg";
import GithubIcon from "../../assets/images/icon-github.svg";

export default function TicketCard({ name, github, avatar }) {
  return (
    <div
      className="relative w-full aspect-[2.143] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(../../assets/images/pattern-ticket.svg)` }}
    >
      <div className="absolute inset-0 p-4 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={LogoMark} alt="Logo" className="w-8 h-8" />
          <div className="text-left">
            <span className="block text-lg font-bold">Coding Conf</span>
            <span className="block text-sm text-gray-500">
              Jan 31, 2025 / Austin, TX
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className="w-10 h-10 object-cover rounded-md shadow-lg"
          />
          <div className="text-left">
            <span className="text-xl font-semibold">{name}</span>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <img src={GithubIcon} alt="Github Icon" className="w-5 h-5" />
              <span>{github}</span>
            </div>
          </div>
        </div>

        <div className="rotate-90 absolute right-1.5 top-[50%] translate-y-[-50%]">
          #{Math.round(Math.random() * 100000)}
        </div>
      </div>
    </div>
  );
}
