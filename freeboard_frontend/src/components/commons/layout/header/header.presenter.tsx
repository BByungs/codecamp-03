import React from "react";
import {
  Wrapper,
  Logo,
  Container,
  HomeOutline,
  HomeFilled,
  Icon,
  Compass,
  Love,
  Logout,
  Login,
  Name,
  Icons,
  MarketOutline,
  MarketFilled,
} from "./header.styles";

export default function HeaderUI(props) {
  return (
    <Wrapper>
      <Container>
        <Logo src="/images/header/logo.png" />
        <Icon>
          {props.data && (
            <Name>{props.data?.fetchUserLoggedIn.name}님 반갑습니다.</Name>
          )}
          <Icons>
            {!props.isMain ? (
              <HomeOutline onClick={props.onClickHome} />
            ) : (
              <HomeFilled onClick={props.onClickHome} />
            )}

            {!props.isMainMarket ? (
              <MarketOutline onClick={props.onClickMarket} />
            ) : (
              <MarketFilled onClick={props.onClickMarket} />
            )}

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
}
