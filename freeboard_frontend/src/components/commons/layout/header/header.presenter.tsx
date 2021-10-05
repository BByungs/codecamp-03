import React from "react";
import {
  Wrapper,
  Logo,
  Container,
  Home,
  Message,
  Icon,
  Compass,
  Love,
  Logout,
} from "./header.styles";

export default function HeaderUI(props) {
  return (
    <Wrapper>
      <Container>
        <Logo src="/images/header/logo.png" onClick={props.onClickLogo} />
        <Icon>
          <span>{props.data?.fetchUserLoggedIn.name}님 반갑습니다</span>
          <Home />
          <Message />
          <Compass />
          <Love />
          <Logout />
        </Icon>
      </Container>
    </Wrapper>
  );
}
