import Logo from "../components/Logo";
import React from "react";

const TicketCard = React.lazy(() => import("../components/TicketCard"));

export default function TicketPage({ data }) {
  const { avatar, avatar_preview, full_name, email, github_username } = data;

  return (
    <section className="px-4 py-8 flex flex-col items-center justify-center text-center gap-5 md:gap-8 relative z-10">
      <Logo />
      <p className="text-[color:var(--neutral-0)] font-bold text-2xl lg:text-4xl xl:text-5xl lg:w-[850px] lg:mt-4">
        Congrats,{" "}
        <span className="bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent">
          {full_name}
        </span>
        ! Your ticket is ready.
      </p>
      <p className="px-4 text-[var(--neutral-300)] md:w-[600px] lg:w-[500px] lg:mb-12">
        We've emailed your ticket to{" "}
        <span className="text-[var(--orange-700)]">{email}</span> and will send
        updates in the run up to the event.
      </p>
      <TicketCard
        full_name={full_name}
        github_username={github_username}
        avatar_preview={avatar_preview}
      />
    </section>
  );
}
