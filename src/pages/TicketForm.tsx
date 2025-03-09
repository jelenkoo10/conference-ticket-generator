import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import IconUpload from "../../assets/images/icon-upload.svg";
import IconInfo from "../../assets/images/icon-info.svg";
import validateEmail from "../utils/validateEmail";
import validateForm from "../utils/validateForm";
import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from "react";

interface TicketFormProps {
  submitForm: (data: FormDataState) => void;
}

export interface FormDataState {
  avatar: File | null;
  avatar_preview: string | null;
  full_name: string;
  email: string;
  github_username: string;
}

export default function TicketForm({ submitForm }: TicketFormProps) {
  const [formData, setFormData] = useState<FormDataState>({
    avatar: null,
    avatar_preview: null,
    full_name: "",
    email: "",
    github_username: "",
  });
  const [avatarError, setAvatarError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (formData.avatar_preview) {
        URL.revokeObjectURL(formData.avatar_preview);
      }
    };
  }, [formData.avatar_preview]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files) {
      const file = files[0];
      if (file) {
        const fileExtension = file.name.split(".")[1].toLowerCase();
        if (!["jpg", "png"].includes(fileExtension)) {
          setAvatarError(
            "File extension must be JPG or PNG. Please try again."
          );
          return;
        }

        if (file.size > 500000) {
          setAvatarError("File too large. Please upload a photo under 500KB.");
          return;
        }
      }

      const previewURL = URL.createObjectURL(file);

      setFormData((prevFormData) => {
        const updatedFormData = {
          ...prevFormData,
          avatar: file,
          avatar_preview: previewURL,
        };

        const { avatar, full_name, email, github_username } = updatedFormData;
        setIsValid(validateForm(avatar, full_name, email, github_username));

        console.log(updatedFormData);

        return updatedFormData;
      });

      setAvatarError("");
    } else {
      setFormData((prevFormData) => {
        const updatedFormData = {
          ...prevFormData,
          [name]: value,
        };

        const { avatar, full_name, email, github_username } = updatedFormData;
        setIsValid(validateForm(avatar, full_name, email, github_username));

        console.log(updatedFormData);

        return updatedFormData;
      });
    }
  };

  const handleRemoveImage = () => {
    if (formData.avatar_preview) {
      URL.revokeObjectURL(formData.avatar_preview);
    }
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        avatar: null,
        avatar_preview: null,
      };

      const { avatar, full_name, email, github_username } = updatedFormData;
      setIsValid(validateForm(avatar, full_name, email, github_username));

      return updatedFormData;
    });
  };

  const handleUploadClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitForm(formData);
  };

  return (
    <section className="px-4 py-8 flex flex-col items-center justify-center text-center gap-5 relative z-10">
      <Logo />
      <p className="text-[color:var(--neutral-0)] font-extrabold text-2xl lg:text-4xl xl:text-5xl lg:w-[850px] mt-4 leading-tight">
        Your Journey to Coding Conf 2025 Starts Here!
      </p>
      <p className="text-[var(--neutral-300)] text-xl leading-tight">
        Secure your spot at next year's biggest coding conference.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[500px] md:mx-auto mt-6"
      >
        <div className="relative w-full">
          <Input
            type="file"
            name="avatar"
            ref={fileInputRef}
            labelText="Upload Avatar"
            inputClass="block w-full opacity-80 rounded-xl px-2 py-10 sm:py-14 border border-dashed border-white bg-[var(--neutral-700)] hover:bg-[var(--neutral-500)] text-[rgba(0,0,0,0)] focus:outline focus:outline-white focus:outline-offset-2"
            labelClass="text-xl font-semibold text-left block mb-2 text-[var(--neutral-300)] max-[400px]:text-sm"
            value={formData.avatar}
            onChange={handleChange}
            error={avatarError}
          />
          {formData.avatar_preview ? (
            <div className="absolute top-[60%] left-[50%] translate-[-50%] flex flex-col gap-2 items-center justify-center pointer-events-none w-full">
              <img
                src={formData.avatar_preview}
                alt="Uploaded avatar"
                className="w-10 h-10 sm:w-14 sm:h-14 object-cover rounded-xl border border-[var(--neutral-500)]"
              />
              <div className="flex gap-2 mt-1 pointer-events-auto">
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="px-3 py-1 text-[14px] rounded-lg bg-[var(--neutral-500)] cursor-pointer"
                >
                  Remove image
                </button>
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="px-3 py-1 text-[14px] rounded-lg bg-[var(--neutral-500)] cursor-pointer"
                >
                  Change image
                </button>
              </div>
            </div>
          ) : (
            <div
              className={`absolute left-[50%] translate-[-50%] flex flex-col max-[400px]:gap-2 gap-3 items-center pointer-events-none w-full ${
                !avatarError ? "top-[62%]" : "top-[52%]"
              }`}
            >
              <img
                src={IconUpload}
                alt="Upload icon"
                className="w-10 p-1 border border-[var(--neutral-500)] rounded-xl"
                width={40}
                height={40}
                loading="lazy"
              />
              <span className="max-[400px]:text-xs">
                Drag and drop or click to upload
              </span>
            </div>
          )}
        </div>
        {!formData.avatar_preview && !avatarError && (
          <div className="flex gap-2 items-center mt-[-28px] mb-8 text-[14px]">
            <img
              src={IconInfo}
              alt="Info icon"
              width={16}
              height={16}
              loading="lazy"
            />
            <span className="leading-none min-[380px]:mt-0.5 max-[400px]:text-[10px]">
              Upload your photo (JPG or PNG, max size: 500KB)
            </span>
          </div>
        )}
        <Input
          type="text"
          name="full_name"
          labelText="Full Name"
          inputClass="block w-full rounded-xl px-2 py-3 border border-white bg-[var(--neutral-700)] hover:bg-[var(--neutral-500)] focus:outline focus:outline-white focus:outline-offset-2"
          labelClass="text-xl font-semibold text-left block mb-2 text-[var(--neutral-300)] max-[400px]:text-sm"
          value={formData.full_name}
          onChange={handleChange}
          error={
            !formData.full_name
              ? "This field is empty. Please enter your full name."
              : null
          }
        />
        <Input
          type="email"
          name="email"
          placeholder="example@email.com"
          labelText="Email Address"
          inputClass="block w-full opacity-80 rounded-xl px-2 py-3 border border-white bg-[var(--neutral-700)] hover:bg-[var(--neutral-500)] focus:outline focus:outline-white focus:outline-offset-2"
          labelClass="text-xl font-semibold text-left block mb-2 text-[var(--neutral-300)] max-[400px]:text-sm"
          value={formData.email}
          onChange={handleChange}
          error={
            !validateEmail(formData.email)
              ? "Please enter a valid email address."
              : null
          }
        />
        <Input
          type="text"
          name="github_username"
          placeholder="@yourusername"
          labelText="Github Username"
          inputClass="block w-full opacity-80 rounded-xl px-2 py-3 border border-white bg-[var(--neutral-700)] hover:bg-[var(--neutral-500)] focus:outline focus:outline-white focus:outline-offset-2"
          labelClass="text-xl font-semibold text-left block mb-2 text-[var(--neutral-300)] max-[400px]:text-sm"
          value={formData.github_username}
          onChange={handleChange}
          error={
            !formData.github_username
              ? "This field is empty. Please enter your Github username."
              : null
          }
        />
        <Button
          className={`bg-[var(--orange-500)] text-[var(--neutral-900)] w-full rounded-xl px-2 py-3 font-bold ${
            !isValid && "opacity-50 pointer-events-none"
          }`}
          text="Generate my ticket"
          disabled={!isValid}
        />
      </form>
    </section>
  );
}
