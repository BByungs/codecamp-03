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

export default function LoginSuccessPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { setUserInfo, userInfo } = useContext(GlobalContext);

  useEffect(() => {
    if (userInfo.email) return;

    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]);

  console.log(userInfo);
  return (
    <>
      <div>로그인에 성공하셨습니다!!</div>
      {data?.fetchUserLoggedIn.name}님 환영합니다.
    </>
  );
}
