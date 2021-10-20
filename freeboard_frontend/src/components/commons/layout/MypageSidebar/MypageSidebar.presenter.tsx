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

export default function MypageSidebarUI() {
  return (
    <Wrapper>
      <Text>MYPAGE</Text>
      <Photo src="/images/Mypage/photo.png" />
      <Name>노원두</Name>
      <PointRow>
        <PointPhoto src="/images/Mypage/clickPointLogo.png" />
        <Point>100000</Point>
      </PointRow>

      <MyProfile>
        <NoClickMyProfile src="/images/Mypage/noClickSmallPhoto.png" />
        {/* <ClickMyProfile src="/images/Mypage/clickSmallPhoto.png" /> */}

        {/* <NoSelectText>내 프로필</NoSelectText> */}
        <SelectText>내 프로필</SelectText>
      </MyProfile>

      <MyPointRow>
        {/* <SelectMyPoint src="/images/Mypage/clickPointLogo.png" /> */}
        <NoSelectMyPoint src="/images/Mypage/noClickPointLogo.png" />
        <NoSelectText>내 포인트</NoSelectText>
        {/* <NoSelectText>내 포인트</NoSelectText> */}
      </MyPointRow>

      <MyProduct>
        <ClickMyProduct src="/images/Mypage/clickMyProductLogo.png" />
        {/* <NoClickMyProduct src="/images/Mypage/clickMyProductLogo.png" /> */}
        {/* <SelectText>내장터</SelectText> */}
        <NoSelectText>내장터</NoSelectText>
      </MyProduct>
    </Wrapper>
  );
}
