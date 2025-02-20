import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import IconUpload from "../../assets/images/icon-upload.svg";

export default function TicketForm() {
  return (
    <section className="px-4 py-8 flex flex-col items-center justify-center text-center gap-5 relative z-10">
      <Logo />
      <p className="text-[color:var(--neutral-0)] font-bold text-2xl">
        Your Journey to Coding Conf 2025 Starts Here!
      </p>
      <p className="px-4 text-[var(--neutral-300)]">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form action={null} className="w-full">
        <Input
          type="file"
          name="full_name"
          labelText="Upload Avatar"
          inputClass="block w-full rounded-xl px-2 py-10 border border-dashed border-white bg-[var(--neutral-700)] mb-8"
          labelClass="text-left block mb-2 text-[var(--neutral-300)]"
        />
        <Input
          type="text"
          name="full_name"
          labelText="Full Name"
          inputClass="block w-full rounded-xl px-2 py-3 border border-white bg-[var(--neutral-700)] mb-8"
          labelClass="text-left block mb-2 text-[var(--neutral-300)]"
        />
        <Input
          type="email"
          name="email"
          defaultValue="example@email.com"
          labelText="Email Address"
          inputClass="block w-full rounded-xl px-2 py-3 border border-white bg-[var(--neutral-700)] mb-8"
          labelClass="text-left block mb-2 text-[var(--neutral-300)]"
        />
        <Input
          type="text"
          name="github_username"
          defaultValue="@yourusername"
          labelText="Github Username"
          inputClass="block w-full rounded-xl px-2 py-3 border border-white bg-[var(--neutral-700)] mb-8"
          labelClass="text-left block mb-2 text-[var(--neutral-300)]"
        />
        <Button
          className="bg-[var(--orange-500)] text-[var(--neutral-900)] w-full rounded-xl px-2 py-3 font-bold"
          text="Generate my ticket"
        />
      </form>
    </section>
  );
}
