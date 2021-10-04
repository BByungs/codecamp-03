import SignInUI from "./signinPage.presenter";
import { useRouter } from "next/router";
import { CREATE_USER } from "./signinPage.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import CheckValidationSignin from "../../commons/library/CheckValidationSignin";
// import CheckValidationSignin from "../../commons/library/CheckValidationSignin";

export default function SignInPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const validationEmailCheck =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]/;

  // 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내
  const validationPasswordCheck =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

  // 이름 2~4자
  const validationNameCheck = /^[가-힣]{2,4}$/;

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickLogin() {
    router.push("/main");
  }
  async function onClickSignIn() {
    if (!name && !email && !password) {
      alert("아무것도 입력하지 않았습니다.");
      return;
    }

    if (!validationEmailCheck.test(email) || !email) {
      // alert("이메일을 확인하세요");
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }

    if (!validationPasswordCheck.test(password) || !password) {
      // alert("비밀번호를 확인하세요");
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }

    if (!validationNameCheck.test(name) || !name) {
      // alert("이름을 확인하세요");
      setIsName(true);
    } else {
      setIsName(false);
    }

    if (
      validationNameCheck.test(name) &&
      validationPasswordCheck.test(password) &&
      validationEmailCheck.test(email) &&
      name &&
      email &&
      password
    ) {
      try {
        const result = await createUser({
          variables: {
            createUserInput: {
              email,
              password,
              name,
            },
          },
        });
        console.log(`id: ${result.data.createUser._id}`);
        console.log(`email: ${result.data.createUser.email}`);
        console.log(`name: ${result.data.createUser.name}`);
        router.push("/main");
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <SignInUI
      onClickLogin={onClickLogin}
      onClickSignIn={onClickSignIn}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
      isName={isName}
      isEmail={isEmail}
      isPassword={isPassword}
    />
  );
}
