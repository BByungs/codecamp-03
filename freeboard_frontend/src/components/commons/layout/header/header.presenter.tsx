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
  Payment,
  PayModal,
} from "./header.styles";
import Head from "next/head";
import Pay from "../../../units/Market/Pay/Pay";

export default function HeaderUI(props: any) {
  return (
    <Wrapper>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          // Version 1.2.0 최신버전임
          // src="https://cdn.iamport.kr/js/iamport.payment-{SDK-최신버전}.js"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <Container>
        <Logo src="/images/header/logo.png" />
        <Icon>
          {props.refreshToken && (
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

            {!props.isMypage ? (
              <MyPageOutline onClick={props.onClickMyPage} />
            ) : (
              <MyPageFilled onClick={props.onClickMyPage} />
            )}

            {props.refreshToken ? (
              <Logout onClick={props.onClickLogout} />
            ) : (
              <Login onClick={props.onClickLogin} />
            )}

            {/* <Payment onClick={props.onClickPayment} /> */}
            <Payment onClick={props.showModal} />

            {props.isModalVisible && (
              <PayModal
                title="충전하기"
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <Pay />
              </PayModal>
            )}
          </Icons>
        </Icon>
      </Container>
    </Wrapper>
  );
}
