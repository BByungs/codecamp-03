import React, { ChangeEvent } from "react";
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
  Login,
  AppDownload,
  Download,
  Footer,
  FooterTxt,
  Footer1,
  Footer2,
  EmailError,
  PasswordError,
  NameError,
  Div,
} from "./signinPage.styles";

interface ISignInUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSignIn: () => Promise<void>;
  onClickLogin: () => void;
  isPassword: boolean;
  isEmail: boolean;
  isName: boolean;
}

export default function SignInUI(props: ISignInUIProps) {
  return (
    <Wrapper>
      <InputInfo>
        <LogoImg src="/images/signinPage/logo/1024px-Instagram_logo.svg.png" />
        <Div>친구들의 사진과 동영상을 보려면 가입하세요.</Div>
        <FaceBookLoginButton>
          <FacebookLogo src="/images/signinPage/logo/facebookLogo1.png" />
          <span
            style={{
              fontFamily: "Noto Sans CJK KR",
              marginTop: "5px",
              cursor: "pointer",
            }}
          >
            FaceBook으로 로그인
          </span>
        </FaceBookLoginButton>
        <Or>
          <OrLine />
          <div style={{ color: "#8E8E8E", fontFamily: "Noto Sans CJK KR" }}>
            또는
          </div>
          <OrLine />
        </Or>
        <Input
          type="text"
          placeholder="이메일 주소"
          onChange={props.onChangeEmail}
        />
        <EmailError isEmail={props.isEmail} isName={false} isPassword={false}>
          이메일을 다시 확인해주세요
        </EmailError>

        <Input type="text" placeholder="이름" onChange={props.onChangeName} />
        <NameError isName={props.isName} isEmail={false} isPassword={false}>
          이름을 다시 확인해주세요
        </NameError>

        <Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
        <PasswordError
          isPassword={props.isPassword}
          isEmail={false}
          isName={false}
        >
          비밀버호를 다시 확인해주세요
        </PasswordError>

        {/* 가입 버튼 */}
        <SigninButton onClick={props.onClickSignIn}>가입</SigninButton>
      </InputInfo>
      <Login onClick={props.onClickLogin}>
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
