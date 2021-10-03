export default function CheckValidationSignin(
  email: string,
  password: string,
  name: string
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
    alert("이메일을 확인하세요");
    return false;
  }

  if (!validationPasswordCheck.test(password) || !password) {
    alert("비밀번호를 확인하세요");
    return false;
  }

  if (!validationNameCheck.test(name) || !name) {
    alert("이름을 확인하세요");
    return false;
  }
  return true;
}
