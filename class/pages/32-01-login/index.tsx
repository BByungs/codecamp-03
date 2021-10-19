import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useContext, useState } from "react";
import { GlobalContext } from "../_app";
import { useRouter } from "next/router";
const LOGIN_USER = gql`
  mutation loginUserExample($password: String!, $email: String!) {
    loginUserExample(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }
  function onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        password,
        email,
      },
    });
    // console.log(result.data.loginUser.accessToken);
    localStorage.setItem(
      "accessToken",
      result.data?.loginUserExample.accessToken
    );
    localStorage.setItem("refreshToken", "true");
    setAccessToken(result.data.loginUserExample.accessToken);
    router.push("/32-02-login-success");
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
