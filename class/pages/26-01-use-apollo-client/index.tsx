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
  const client = useApolloClient(); // useApolloClient import해야함

  async function onClickLogin(data) {
    try {
      const result = await loginUser({
        variables: {
          email: data.myEmail,
          password: data.myPassword,
        },
      });
      const accessToken = result.data.loginUser.accessToken; // ! 1. 로그인 한 유저의 accessToken을 가져와서

      //   const result = await axios.get("koreajson.com")  // client.query와 비교해보기

      const resultUserInfo = await client.query({
        // variables : {

        // }
        // ! 2. query로 accessToken을 가져오기위해 FETCH_USER_LOGGED_IN 을 써줬고
        query: FETCH_USER_LOGGED_IN, // accessToken이 없으면 요청이 안됨
        context: {
          // 그래서 여기서 accessToken을 가져옴
          // 헤더같은 추가적인, 부가적인 옵션들을 담아준다.
          headers: {
            authorization: `Bearer ${accessToken}`, // ! 3. localStorage에 있는 accessToken을 가져옴
          },
        },
      });
      //   const userInfo = (await resultUserInfo).data.fetchUserLoggedIn;
      const userInfo = resultUserInfo.data.fetchUserLoggedIn; // ! 4. resultUserInfo의 fetchUserLoggedIn을 userInfo에 담음
      setAccessToken(accessToken); // ! 5. GlobalContext의 accessToken을 업데이트
      setUserInfo(userInfo); // ! 6. GlobalContext의 userInfo를 업데이트
    } catch (error) {
      alert(error.message);
    }
  }

  // 원래는 로그인하고 , data.fetchUserLoggedIn?.name으로 사용자의 이름을 불러와야 하지만,
  // 로그인하면서 fetchUserLoggedIn의 쿼리를 동시에 요청해서
  // 데이터를 받아오기 때문에 useQuery를 따로 할 필요가 없음.

  // 그리고 데이터를 제대로 불러오려면 새로고침을 해야 불러와졌는데,
  // 이렇게 하면 바로바로 받아와짐.

  return (
    <>
      {userInfo.email ? (
        `${userInfo.name}님 환영합니다`
      ) : (
        <form onSubmit={handleSubmit(onClickLogin)}>
          이메일: <input type="text" {...register("myEmail")} />
          <br />
          비밀번호: <input type="password" {...register("myPassword")} />
          <br />
          {/* <button type="button" onClick={onClickFunction}>로그인하기</button> */}
          {/* 이렇게 하면 onClickFunction만 단독적으로 실행 시킬 수 있다. */}
          <button type="submit">로그인하기</button>
        </form>
      )}
    </>
  );
}
