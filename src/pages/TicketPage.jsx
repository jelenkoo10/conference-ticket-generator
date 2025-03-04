import Logo from "../components/Logo";
import TicketCard from "../components/TicketCard";

export default function Ticket({ data }) {
  const { avatar, avatarPreview, full_name, email, github_username } = data;

  return (
    <section className="px-4 py-8 flex flex-col items-center justify-center text-center gap-5 relative z-10">
      <Logo />
      <p className="text-[color:var(--neutral-0)] font-bold text-2xl">
        Congrats,{" "}
        <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">
          {full_name}
        </span>
        ! Your ticket is ready.
      </p>
      <p className="px-4 text-[var(--neutral-300)]">
        We've emailed your ticket to{" "}
        <span className="text-[var(--orange-700)]">{email}</span> and will send
        updates in the run up to the event.
      </p>
      <TicketCard
        name={full_name}
        github={github_username}
        avatar={avatarPreview}
      />
    </section>
  );
}
