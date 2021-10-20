import MainPageUI from "./mainPage.presenter";
import { useRouter } from "next/router";
import { LOGIN_USER } from "./mainPage.queries";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";

export default function MainPage() {
  const { setRefreshToken, setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation(LOGIN_USER);

  function onClickSubmit() {
    router.push("/signin");
  }
  function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  async function onClickLogin() {
    try {
      const result = await loginUser({
        variables: {
          password,
          email,
        },
      });
      // console.log(result.data?.loginUser.accessToken);
      localStorage.setItem("refreshToken", "true");
      setRefreshToken(localStorage.getItem("refreshToken"));
      localStorage.setItem("accessToken", result.data?.loginUser.accessToken);
      setAccessToken(result.data?.loginUser.accessToken);

      router.push("/");
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <>
      <MainPageUI
        onClickSubmit={onClickSubmit}
        onClickLogin={onClickLogin}
        onChangePassword={onChangePassword}
        onChangeEmail={onChangeEmail}
      />
    </>
  );
}
