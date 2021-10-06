import { gql, useQuery } from "@apollo/client";
import { useEffect, useContext } from "react";
import { GlobalContext } from "../_app";
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`;
// 받아온 정보를 global context에 담아서 활용해보면??

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { setUserInfo, userInfo } = useContext(GlobalContext);

  useEffect(() => {
    if (userInfo.email) return;
    // userInfo.email이 있으면 걍 종료

    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]); // data가 변경되면 실행

  // console.log(userInfo);
  return (
    <>
      <div>로그인에 성공하셨습니다!!</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다.
    </>
  );
}
