import styled from "@emotion/styled";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

const Wrapper = styled.div`
  /* background-image: url("/images/header/poster1.jpeg"); */
  width: 100%;
  height: 75px;
  background-color: white;
  display: flex;
  /* margin-bottom: 1px; */
`;

const Logo = styled.div`
  width: 15%;
  background-color: #e60012;
  border-left: thin solid #bdbdbd;
  height: 100%;
  padding: 1.605em;
  display: flex;
  justify-content: center;
  border-bottom: thin solid #bdbdbd;
  cursor: pointer;
`;
const Menu1 = styled.div`
  width: 15%;
  height: 100%;
  border-left: thin solid #bdbdbd;
  border-bottom: thin solid #bdbdbd;
  padding: 1.3em;
  display: flex;
  justify-content: center;
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
  font-size: 18px;
  color: #111;
  font-weight: 350;
  cursor: pointer;
  :hover {
    color: #e60012;
  }
`;

// ######## Menu2 ######## //
const Menu2 = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
`;

const Menu2Left = styled.div`
  width: 68%;
  background-color: #fe7c0a;
  border-left: thin solid #bdbdbd;
  border-bottom: thin solid #bdbdbd;
  padding: 1.3em;
  display: flex;
  justify-content: center;
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif;
  font-size: 18px;
  color: white;
  font-weight: 350;
  cursor: pointer;
`;

const Menu2Right = styled.div`
  width: 32%;
  border-left: thin solid #bdbdbd;
  border-bottom: thin solid #bdbdbd;
  padding: 1.3em;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
// ######## Menu2 ######## //

const LogoImg = styled.img``;

const Search = styled(SearchOutlined)`
  font-size: 40px;
  font-weight: 350;
`;

export default function Header() {
  const router = useRouter();
  function onClickLogo() {
    router.push("/boards");
  }
  return (
    <>
      <Wrapper>
        <Logo onClick={onClickLogo}>
          <LogoImg src="/images/header/logo_nintendo_red.gif" />
        </Logo>
        <Menu1>Nitendo Switch</Menu1>
        <Menu1>닌텐도 3DS</Menu1>
        <Menu1>소프트웨어</Menu1>
        <Menu1>고객지원</Menu1>
        <Menu1>News</Menu1>
        <Menu2>
          <Menu2Left>Login</Menu2Left>
          <Menu2Right>
            <Search />
          </Menu2Right>
        </Menu2>
      </Wrapper>
    </>
  );
}
