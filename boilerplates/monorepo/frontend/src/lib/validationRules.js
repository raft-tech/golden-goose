export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  // To Do: determine password requirements
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};
