import validateEmail from "./validateEmail";

const validateForm = (
  avatar: File | null,
  full_name: string,
  email: string,
  github_username: string
): boolean => {
  return !!(avatar && full_name && validateEmail(email) && github_username);
};

export default validateForm;
