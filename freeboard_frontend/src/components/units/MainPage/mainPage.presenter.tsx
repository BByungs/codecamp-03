import {
  Wrapper,
  Body,
  Footer,
  BodyLeft,
  Img,
  Slick,
  LogIn,
  InstagramLogo,
  EmailInput,
  PasswordInput,
  LoginButton,
  Or,
  OrLine,
  FacebookLogin,
  FacebookLogo,
  SignIn,
  BodyRight,
  SignInButton,
  AppDownload,
  Download,
  FooterTxt,
  Footer1,
  Footer2,
  Footer3,
  WrongMessage,
} from "./mainPage.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMainPageUI } from "./mainPage.types";

export default function MainPageUI(props: IMainPageUI) {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Wrapper>
      <Body>
        <BodyLeft>
          <Slick>
            <Slider {...settings}>
              <Img src="/images/mainPage/phone/Phone_one.jpeg" />
              <Img src="/images/mainPage/phone/Phone_two.jpeg" />
              <Img src="/images/mainPage/phone/Phone_three.jpeg" />
              <Img src="/images/mainPage/phone/Phone_four.jpeg" />
              <Img src="/images/mainPage/phone/Phone_five.jpeg" />
            </Slider>
          </Slick>
        </BodyLeft>

        <BodyRight>
          <LogIn>
            <InstagramLogo src="/images/mainPage/logo/1024px-Instagram_logo.svg.png" />
            <EmailInput
              type="text"
              placeholder="이메일"
              onChange={props.onChangeEmail}
            />
            <PasswordInput
              type="password"
              placeholder="비밀번호"
              onChange={props.onChangePassword}
            />
            <LoginButton onClick={props.onClickLogin}>로그인</LoginButton>
            <Or>
              <OrLine />
              <div style={{ color: "#8E8E8E", fontFamily: "Noto Sans CJK KR" }}>
                또는
              </div>
              <OrLine />
            </Or>
            <FacebookLogin>
              <FacebookLogo src="/images/mainPage/logo/facebook_original_logo_icon_146526.png" />
              <div
                style={{
                  color: "#385185",
                  fontSize: "15px",
                  fontWeight: "bold",
                  fontFamily: "Noto Sans CJK KR",
                  cursor: "pointer",
                }}
              >
                Facebook으로 로그인
              </div>
            </FacebookLogin>
            <WrongMessage>잘못된 비밀번호입니다. 다시 확인하세요.</WrongMessage>
            <div
              style={{
                color: "#385185",
                fontSize: "13px",
                fontWeight: "lighter",
                fontFamily: "Noto Sans CJK KR",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              비밀번호를 잊으셨나요?
            </div>
          </LogIn>
          <SignIn>
            <span
              style={{
                marginRight: "5px",
                fontSize: "14px",
                fontFamily: "Noto Sans CJK KR",
              }}
            >
              계정이 없으신가요?
            </span>
            <SignInButton onClick={props.onClickSubmit}>가입하기</SignInButton>
          </SignIn>
          <div
            style={{
              width: "350px",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              fontFamily: "Noto Sans CJK KR",
            }}
          >
            앱을 다운로드 하세요.
          </div>
          <AppDownload>
            <Download
              src="/images/mainPage/logo/4a5c9d62d51b.png"
              style={{ marginRight: "10px" }}
            />
            <Download src="/images/mainPage/logo/f155b664a93b.png" />
          </AppDownload>
        </BodyRight>
      </Body>
      <Footer>
        <Footer1>
          <FooterTxt>소개</FooterTxt>
          <FooterTxt>블로그</FooterTxt>
          <FooterTxt>채용정보</FooterTxt>
          <FooterTxt>도움말</FooterTxt>
          <FooterTxt>API</FooterTxt>
          <FooterTxt>개인정보처리방침</FooterTxt>
          <FooterTxt>약관</FooterTxt>
          <FooterTxt>인기계정</FooterTxt>
          <FooterTxt>해시태그</FooterTxt>
          <FooterTxt>위치</FooterTxt>
          <FooterTxt>Instagram Lite</FooterTxt>
        </Footer1>
        <Footer2>
          <FooterTxt>뷰티</FooterTxt>
          <FooterTxt>댄스</FooterTxt>
          <FooterTxt>피트니스</FooterTxt>
          <FooterTxt>식음료</FooterTxt>
          <FooterTxt>집 및 정원</FooterTxt>
          <FooterTxt>음악</FooterTxt>
          <FooterTxt>시각 예술</FooterTxt>
        </Footer2>
        <Footer3>
          <div
            style={{
              color: "#9c9c9c",
              fontSize: "13px",
              fontFamily: "Noto Sans CJK KR",
            }}
          >
            © 2021 Instagram from Facebook
          </div>
        </Footer3>
      </Footer>
    </Wrapper>
  );
}
