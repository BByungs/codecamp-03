import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import Banner from "./banner/Banner.container";
import Nav from "./nav/Nav.container";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  width: 1200px;
`;

const Body = styled.div`
  width: 70%;
`;

const Sidebar = styled.div`
  width: 30%;
  background-color: skyblue;
`;

const SideAndBody = styled.div`
  display: flex;
  height: 35%;
  font-family: "myfont";
`;

const HIDEN_FOOTER = ["/13-01-layout-hidden"];

export default function Layout(props) {
  const router = useRouter();
  // console.log(router);
  const isHiddenFooter = HIDEN_FOOTER.includes(router.pathname);
  // 배열안에 router.pathname이 들어가 있다면 isHiddenFooter는 true

  return (
    <Wrapper>
      <LayoutHeader></LayoutHeader>
      <Banner />
      <Nav />
      <SideAndBody>
        <Sidebar>This is Sidebar</Sidebar>
        <Body>{props.children}</Body>
      </SideAndBody>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}
