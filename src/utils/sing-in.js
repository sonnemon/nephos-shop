export const validateSignIn = ({ email, password }) => {
  const errors = {};
  if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email';
  }
  if (password.length < 6) {
    errors.password = 'Please enter a valid passowrd';
  }
  return Object.keys(errors).length ? errors : null;
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
