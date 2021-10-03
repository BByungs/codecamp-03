import React from "react";
import { ErrorMessage } from "../board/write/BoardWrite.styles";
import {
  Wrapper,
  LogoImg,
  InputInfo,
  FaceBookLoginButton,
  FacebookLogo,
  Or,
  OrLine,
  Input,
  SigninButton,
  EmailError,
  NameError,
  IdError,
  PasswordError,
  Login,
  AppDownload,
  Download,
  Footer,
  FooterTxt,
  Footer1,
  Footer2,
} from "./signinPage.styles";

export default function SignInUI() {
  return (
    <Wrapper>
      <InputInfo>
        <LogoImg src="/images/signinPage/logo/1024px-Instagram_logo.svg.png" />
        <div
          style={{
            fontSize: "17px",
            fontWeight: "600",
            color: "#8E8E8E",
            fontFamily: "Noto Sans CJK KR",
            width: "270px",
            textAlign: "center",
          }}
        >
          친구들의 사진과 동영상을 보려면 가입하세요.
        </div>
        <FaceBookLoginButton>
          <FacebookLogo src="/images/signinPage/logo/facebookLogo1.png" />
          <sapn
            style={{
              fontFamily: "Noto Sans CJK KR",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            FaceBook으로 로그인
          </sapn>
        </FaceBookLoginButton>
        <Or>
          <OrLine />
          <div style={{ color: "#8E8E8E", fontFamily: "Noto Sans CJK KR" }}>
            또는
          </div>
          <OrLine />
        </Or>
        <Input type="text" placeholder="이메일 주소" />
        <EmailError>이메일주소를 다시 확인해 주세요.</EmailError>
        <Input type="text" placeholder="성명" />
        <NameError>이름을 다시 확인해 주세요.</NameError>
        <Input type="text" placeholder="아이디" />
        <IdError>아이디를 다시 확인해 주세요.</IdError>
        <Input type="password" placeholder="비밀번호" />
        <PasswordError>비밀번호를 다시 확인해 주세요.</PasswordError>
        <SigninButton>가입</SigninButton>
      </InputInfo>
      <Login>
        <span style={{ fontFamily: "Noto Sans CJK KR" }}>
          계정이 있으신가요?
        </span>
        {/* 로그인으로 이동해야함 */}
        <span
          style={{
            color: "#0095F6",
            marginLeft: "5px",
            fontFamily: "Noto Sans CJK KR",
            cursor: "pointer",
          }}
        >
          로그인
        </span>
      </Login>
      <div>앱을 다운로드하세요.</div>
      <AppDownload>
        <Download
          src="/images/mainPage/logo/4a5c9d62d51b.png"
          style={{ marginRight: "10px" }}
        />
        <Download src="/images/mainPage/logo/f155b664a93b.png" />
      </AppDownload>
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
          <div
            style={{
              color: "#9c9c9c",
              fontSize: "13px",
              fontFamily: "Noto Sans CJK KR",
            }}
          >
            © 2021 Instagram from Facebook
          </div>
        </Footer2>
      </Footer>
    </Wrapper>
  );
}
