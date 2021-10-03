export default function CheckValidationSignin(
  email,
  password,
  name,
  setEmailError,
  setPasswordError,
  setNameError
) {
  if (!email && !password && !name) {
    return false;
  }
  if (!email || !/^\w+@\w+\.+$/.test(email)) {
    setEmailError(true);
    return false;
  }
  if (
    !password ||
    !/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/.test(
      password
    )
  ) {
    setPasswordError(true);
    return false;
  }
  if (!name || !/^[가-힣]+$/.test("name")) {
    setNameError(true);
    return false;
  }
  return true;
}
