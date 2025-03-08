import TicketSvg from "../../assets/images/pattern-ticket.svg";
import LogoMark from "../../assets/images/logo-mark.svg";
import GithubIcon from "../../assets/images/icon-github.svg";

export default function TicketCard({ name, github, avatar }) {
  return (
    <div className="bg-pattern-ticket relative w-full max-w-[500px] aspect-[2.143] bg-cover bg-no-repeat bg-center">
      <div className="absolute inset-0 p-4 flex flex-col justify-between gap-4 max-[360px]:gap-2">
        <div className="flex items-center lg:items-start gap-3">
          <img
            src={LogoMark}
            alt="Logo"
            className="w-8 h-8 max-[420px]:w-6 max-[420px]:h-6"
            loading="lazy"
            width={32}
            height={32}
          />
          <div className="text-left">
            <span className="block text-lg max-[420px]:text-sm sm:text-xl lg:text-2xl font-bold">
              Coding Conf
            </span>
            <span className="block text-sm max-[420px]:text-[12px] text-gray-400">
              Jan 31, 2025 / Austin, TX
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className="w-10 h-10 max-[420px]:w-7 max-[420px]:h-7 lg:w-16 lg:h-16 object-cover rounded-md shadow-lg"
            loading="lazy"
            width={40}
            height={40}
          />
          <div className="text-left">
            <span className="text-lg max-[420px]:text-sm lg:text-xl font-semibold">
              {name}
            </span>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <img
                src={GithubIcon}
                alt="Github Icon"
                className="w-5 h-5 max-[420px]:w-4 max-[420px]:h-4"
                loading="lazy"
                width={20}
                height={20}
              />
              <span className="max-[420px]:text-xs">{github}</span>
            </div>
          </div>
        </div>
        <div className="rotate-90 absolute right-1.5 max-[420px]:right-0 top-[50%] translate-y-[-50%] text-gray-400 lg:text-xl">
          #{Math.round(Math.random() * 100000)}
        </div>
      </div>
    </div>
  );
}
