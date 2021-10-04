import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5em;
`;
export const LogoImg = styled.img`
  width: 175px;
  height: 55px;
  margin-bottom: 8px;
  margin: auto;
`;

export const InputInfo = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  padding: 3em;
`;
export const FaceBookLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #277dc3;
  color: white;
  border: none;
  width: 268px;
  height: 32px;
  border-radius: 5px;
  margin-top: 5px;
`;
export const FacebookLogo = styled.img`
  width: 16px;
  height: 16px;
`;
export const Or = styled.div`
  display: flex;
  width: 262px;
  height: 15px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 15px;
`;
export const OrLine = styled.div`
  width: 104.75px;
  border-bottom: 1px solid #bdbdbd;
`;
export const Input = styled.input`
  width: 262px;
  height: 38px;
  background-color: #fafafa;
  padding-left: 10px;
  outline: none;
  border: 1px solid #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-size: 13px;
  border-radius: 3px;
  margin-top: 5px;
`;
export const SigninButton = styled.button`
  background-color: #277dc3;
  width: 262px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 10px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  :hover {
    opacity: 0.7;
  }
`;
export const Login = styled.div`
  width: 350px;
  height: 70px;
  border: 1px solid #bdbdbd;
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 13px;
`;
export const AppDownload = styled.div`
  width: 350px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const Download = styled.img`
  width: 136px;
  height: 40px;
  cursor: pointer;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
export const FooterTxt = styled.span`
  margin-right: 20px;
  color: #9c9c9c;
  font-size: 13px;
  font-family: Noto Sans CJK KR;
  cursor: pointer;
`;
export const Footer1 = styled.div`
  margin-bottom: 2px;
`;
export const Footer2 = styled.div``;

interface IProps {
  isEmail: boolean;
  isName: boolean;
  isPassword: boolean;
}

export const EmailError = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 12px;
  display: ${(props: IProps) => (props.isEmail ? "block" : "none")};
`;
export const NameError = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 12px;
  display: ${(props: IProps) => (props.isName ? "block" : "none")};
`;
export const PasswordError = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 12px;
  display: ${(props: IProps) => (props.isPassword ? "block" : "none")};
`;
