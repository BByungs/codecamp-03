import {
  Wrapper,
  Logo,
  Container,
  Icon,
  Logout,
  Login,
  Name,
  Icons,
  HomeFilled,
  HomeOutline,
  ListFilled,
  ListOutline,
  MyPageOutline,
  MyPageFilled,
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
              <HomeOutline onClick={props.onClickMain} />
            ) : (
              <HomeFilled onClick={props.onClickMain} />
            )}

            {!props.isBoardList ? (
              <ListOutline onClick={props.onClickBoardList} />
            ) : (
              <ListFilled onClick={props.onClickBoardList} />
            )}

            {!props.isMyPage ? (
              <MyPageOutline onClick={props.onClickMyPage} />
            ) : (
              <MyPageFilled onClick={props.onClickMyPage} />
            )}

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
