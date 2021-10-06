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
  Login,
  Name,
  Icons,
} from "./header.styles";
import { withAuth } from "../../hoc/withAuth";

export const HeaderUI = (props) => {
  return (
    <Wrapper>
      <Container>
        <Logo src="/images/header/logo.png" />
        <Icon>
          {props.data && (
            <Name>{props.data?.fetchUserLoggedIn.name}님 반갑습니다.</Name>
          )}
          <Icons>
            <Home onClick={props.onClickHome} />
            <Message />
            <Compass />
            <Love />
            {props.data ? (
              <Logout onClick={props.onClickLogout} />
            ) : (
              <Login onClick={props.onClickLogin} />
            )}
          </Icons>
        </Icon>
      </Container>
    </Wrapper>
  );
};

export default withAuth(HeaderUI);
