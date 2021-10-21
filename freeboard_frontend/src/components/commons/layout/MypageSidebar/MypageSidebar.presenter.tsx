import {
  Wrapper,
  Text,
  Photo,
  Name,
  PointRow,
  PointPhoto,
  Point,
  MyProduct,
  ClickMyProduct,
  NoClickMyProduct,
  SelectText,
  NoSelectText,
  MyPointRow,
  NoSelectMyPoint,
  SelectMyPoint,
  MyProfile,
  NoClickMyProfile,
  ClickMyProfile,
} from "./MypageSidebar.styles";

export default function MypageSidebarUI(props) {
  return (
    <Wrapper>
      <Text>MYPAGE</Text>
      <Photo src="/images/Mypage/photo.png" />
      <Name>{props.fetchUserLoggedIn?.fetchUserLoggedIn.name}</Name>
      <PointRow>
        <PointPhoto src="/images/Mypage/clickPointLogo.png" />
        <Point>
          {/* {`${props.fetchUserLoggedIn?.fetchUserLoggedIn.userPoint?.amount.toLocaleString()}원`} */}
          {props.fetchUserLoggedIn?.fetchUserLoggedIn.userPoint?.amount}
        </Point>
      </PointRow>

      <MyProfile onClick={props.onClickMoveToMain}>
        {props.isMypageMain ? (
          <ClickMyProfile src="/images/Mypage/clickSmallPhoto.png" />
        ) : (
          <NoClickMyProfile src="/images/Mypage/noClickSmallPhoto.png" />
        )}
        {props.isMypageMain ? (
          <SelectText>내 프로필</SelectText>
        ) : (
          <NoSelectText>내 프로필</NoSelectText>
        )}
      </MyProfile>

      <MyPointRow onClick={props.onClickMoveToMyPoint}>
        {props.isMypageMyPoint ? (
          <SelectMyPoint src="/images/Mypage/clickPointLogo.png" />
        ) : (
          <NoSelectMyPoint src="/images/Mypage/noClickPointLogo.png" />
        )}

        {props.isMypageMyPoint ? (
          <SelectText>내 포인트</SelectText>
        ) : (
          <NoSelectText>내 포인트</NoSelectText>
        )}
      </MyPointRow>

      <MyProduct onClick={props.onClickMoveToMyProduct}>
        {props.isMypageMyProduct ? (
          <ClickMyProduct src="/images/Mypage/clickMyProductLogo.png" />
        ) : (
          <NoClickMyProduct src="/images/Mypage/noClickMyProductLogo.png" />
        )}

        {props.isMypageMyProduct ? (
          <SelectText>내장터</SelectText>
        ) : (
          <NoSelectText>내장터</NoSelectText>
        )}
      </MyProduct>
    </Wrapper>
  );
}
