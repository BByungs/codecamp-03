import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginTest() {
  const [loginUser] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          email,
          password,
        },
      });
      console.log(result.data.loginUser.accessToken);
      console.log("로그인성공!!");
    } catch (err: any) {
      alert(err.message);
    }
  }
  return (
    <>
      아이디 : <input type="text" onChange={onChangeEmail} />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
