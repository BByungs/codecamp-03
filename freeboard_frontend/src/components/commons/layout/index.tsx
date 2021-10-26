import styled from "@emotion/styled";
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
  display: flex;
  flex-direction: row;
`;

export default function Layout(props: any) {
  return (
    <>
      {!props.isMypage && (
        <Wrapper>
          <Header isMypage={props.isMypage} />
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
          <Header isMypage={props.isMypage} />
          <div
            style={{
              borderBottom: "1px solid #bdbdbd",
              width: "100%",
              marginBottom: "50px",
            }}
          ></div>
          <Mypage>
            <MypageSidebar
              isMypageMain={props.isMypageMain}
              isMypageMyPoint={props.isMypageMyPoint}
              isMypageMyProduct={props.isMypageMyProduct}
            />
            <div
              style={{
                borderRight: "1px solid #bdbdbd",
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
