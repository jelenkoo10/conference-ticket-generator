import validateEmail from "./validateEmail";

const validateForm = (avatar, full_name, email, github_username) => {
  return avatar && full_name && validateEmail(email) && github_username;
};

export default validateForm;
