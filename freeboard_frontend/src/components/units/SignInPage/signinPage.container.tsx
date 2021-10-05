import SignInUI from "./signinPage.presenter";
import { useRouter } from "next/router";
import { CREATE_USER } from "./signinPage.queries";
import { useMutation } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { CheckValidationSignin } from "../../commons/library/CheckValidationSignin";

export default function SignInPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  function check(type: string, bool: boolean) {
    if (type === "password") {
      setIsPassword(bool);
    } else if (type === "name") {
      setIsName(bool);
    } else if (type === "email") {
      setIsEmail(bool);
    }
  }
  function onChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }
  function onChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onClickLogin() {
    router.push("/");
  }
  async function onClickSignIn() {
    CheckValidationSignin(email, password, name, check);
    if (CheckValidationSignin(email, password, name, check)) {
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
        router.push("/");
      } catch (error: any) {
        // 타입 어떻게 해야하는지 궁금
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
