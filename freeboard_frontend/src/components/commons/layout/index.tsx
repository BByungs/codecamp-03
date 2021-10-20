import styled from "@emotion/styled";
import { useEffect } from "react";
import MyPage from "../../../../pages/mypage";
import Header from "./header/header.container";
import MypageSidebar from "./MypageSidebar/MypageSidebar.container";

const Body = styled.div`
  width: 1200px;
`;

const MypageBody = styled.div`
  width: 979px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Mypage = styled.div`
  width: 1200px;
  /* height: 648px; */
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
`;

export default function Layout(props) {
  useEffect(() => {
    console.log([props.isMypage]);
  }, [props.isMypage]);

  return (
    <>
      {!props.isMypage && (
        <Wrapper>
          <Header />
          <div
            style={{
              borderBottom: "1px solid #bdbdbd",
              width: "100%",
              marginBottom: "50px",
            }}
          ></div>
          <Body>{props.children}</Body>
        </Wrapper>
      )}

      {props.isMypage && (
        <Wrapper>
          <Header />
          <div
            style={{
              borderBottom: "1px solid #bdbdbd",
              width: "100%",
              marginBottom: "50px",
            }}
          ></div>
          <Mypage>
            <MypageSidebar />
            <div
              style={{
                borderRight: "1px solid #bdbdbd",
                height: "100vh",
                marginRight: "40px",
              }}
            />
            <MypageBody>{props.children}</MypageBody>
          </Mypage>
        </Wrapper>
      )}
    </>
  );
}
