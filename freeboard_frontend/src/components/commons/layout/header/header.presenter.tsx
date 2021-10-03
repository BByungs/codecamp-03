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

export default function HeaderUI() {
  return (
    <Wrapper>
      <Container>
        <Logo src="/images/header/logo.png" />
        <Icon>
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
