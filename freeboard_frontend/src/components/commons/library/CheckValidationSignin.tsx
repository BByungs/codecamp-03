// 여기로 setIsEmail , setIsName , setIsPassword 넘겨주면 됨

export function CheckValidationSignin(
  email: string,
  password: string,
  name: string,
  check: (type: string, bool: boolean) => void
) {
  const validationEmailCheck =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]/;

  // 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내
  const validationPasswordCheck =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  // 이름 2~4자
  const validationNameCheck = /^[가-힣]{2,4}$/;

  if (!name && !email && !password) {
    alert("아무것도 입력하지 않았습니다.");
    return false;
  }

  if (!validationEmailCheck.test(email) || !email) {
    check("email", true);
  } else {
    check("email", false);
  }

  if (!validationPasswordCheck.test(password) || !password) {
    check("password", true);
  } else {
    check("password", false);
  }

  if (!validationNameCheck.test(name) || !name) {
    check("name", true);
  } else {
    check("name", false);
  }

  if (
    validationNameCheck.test(name) &&
    validationPasswordCheck.test(password) &&
    validationEmailCheck.test(email) &&
    name &&
    email &&
    password
  ) {
    return true;
  }
}
