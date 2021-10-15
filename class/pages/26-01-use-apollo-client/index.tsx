import { useApolloClient, useMutation } from "@apollo/client";
// import axios from "axios";
import gql from "graphql-tag";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

export default function UseApolloClientPage() {
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const { handleSubmit, register } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const client = useApolloClient();

  async function onClickLogin(data) {
    try {
      const result = await loginUser({
        variables: {
          email: data.myEmail,
          password: data.myPassword,
        },
      });
      const accessToken = result.data.loginUser.accessToken;

      //   const result = await axios.get("koreajson.com")  // client.query와 비교해보기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN, // accessToken이 없으면 요청이 안됨
        context: {
          // 그래서 여기서 accessToken을 가져옴
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      });
      //   const userInfo = (await resultUserInfo).data.fetchUserLoggedIn;
      const userInfo = resultUserInfo.data.fetchUserLoggedIn;
      setAccessToken(accessToken);
      setUserInfo(userInfo);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일: <input type="text" {...register("myEmail")} />
          <br />
          비밀번호: <input type="text" {...register("myPassword")} />
          <br />
          <button type="submit">로그인하기</button>
        </form>
      )}
    </>
  );
}
