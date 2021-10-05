import styled from "@emotion/styled";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import Header from "./header/header.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
const Body = styled.div`
  width: 1200px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      email
      picture
    }
  }
`;

export default function Layout(props) {
  const { accessToken, setAccessToken, userInfo, setUserInfo } =
    useContext(GlobalContext);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();

  useEffect(() => {
    if (userInfo.email) return;
    // userInfo.email이 있으면 걍 종료

    setUserInfo({
      email: data?.fetchUserLoggedIn.email,
      name: data?.fetchUserLoggedIn.name,
      picture: data?.fetchUserLoggedIn.picture,
    });
  }, [data]); // data가 변경되면 실행ssToken]);

  useEffect(() => {
    if (!accessToken) {
      alert("다시 로그인 하세요");
      router.push("/");
    }
  }, [accessToken]);

  return (
    <>
      <Wrapper>
        <Header data={data} />
        <div
          style={{
            borderBottom: "1px solid #bdbdbd",
            width: "100%",
            marginBottom: "50px",
          }}
        ></div>
        <Body>{props.children}</Body>
      </Wrapper>
    </>
  );
}
