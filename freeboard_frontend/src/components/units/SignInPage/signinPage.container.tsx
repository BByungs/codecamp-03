import SignInUI from "./signinPage.presenter";
import { useRouter } from "next/router";
import { CREATE_USER } from "./signinPage.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [createUser] = useMutation(CREATE_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function onClickLogin() {
    router.push("/main");
  }
  async function onClickSignIn() {
    if (!email && !password && !name) {
      return;
    }
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

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  return (
    <SignInUI
      onClickLogin={onClickLogin}
      onClickSignIn={onClickSignIn}
      onChangeEmail={onChangeEmail}
      onChangeName={onChangeName}
      onChangePassword={onChangePassword}
    />
  );
}
