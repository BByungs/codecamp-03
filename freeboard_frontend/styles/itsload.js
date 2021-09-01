import styled from "@emotion/styled"

export const Container = styled.div`
    width: 640px;
    height: 1138px;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    /* background-color: skyblue; */
    background-image: url(/wallpaper.png);
`

export const Topbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 639px;
    height: 43px;
    padding-top: 9px;
    padding-right: 14px;
    /* background-color: red; */
`

export const Topbar_Func = styled.div`
    width: 182px;
    height: 43px;
    display: flex;
    justify-content: space-between;
`

export const Wifi = styled.div`
    width: 28px;
    height: 21px;
    /* background-color:white; */
`
export const Internet = styled.div`
    width: 21px;
    height: 21px;
    /* background-color:white; */
`
export const Battery = styled.div`
    width: 14px;
    height: 23px;
    /* background-color:white; */
`
export const Time = styled.div`
    width: 59px;
    height: 28px;
    color: #ffffff;
    font-size: 23.1px;
    font-weight: 250;
`
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 51px;
    padding-right: 49px;
    padding-bottom: 83px;
    padding-top: 181px; 
`

export const Application = styled.div`
    width: 218px;
    height: 189px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 162px;
`

export const AppIcon = styled.img`
    width: 100px;
    height: 100px;
`

export const AppName = styled.div`
    width: 218px;
    height: 62px;
    font-size: 60px;
    font-weight: bold;
    color: white;
`

export const InputLogin = styled.div`
    width: 540px;
    height: 183px;
    display: flex;
    flex-direction: column;
`
export const Email = styled.div`
    display: flex;
    height: 50px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const EmailInput = styled.input`
    width: 520px;
    height: 30px;
    font-size: 24px;
    background-color:transparent;
    border: 0;
    color: white;
`
export const Underbar = styled.div`
    border-bottom: 1px solid #ffffff;
`

export const EmailDeleteIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`

export const PasswordDeleteIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`
export const EmailFirst = styled.div`
    height: 20px;
    display: flex;
    justify-content: space-between;
`
export const EmailErrorMsg = styled.div`
    height: 20px;
    width: 540px;
    color: #ff1b6d;
    font-size: 18px;
    /* margin-bottom: 34px; */
    margin-bottom: 3px;
`

export const PasswordErrorMsg = styled.div`
    height: 20px;
    width: 540px;
    color: #ff1b6d;
    font-size: 18px;
    margin-bottom: 20px;
`
export const Password = styled.div`
    height: 50px;
    width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PasswordInput = styled.input`
    width: 520px;
    height: 20px;
    font-size: 30px;
    background-color:transparent;
    border: 0;
    color: white;
`
export const PasswordFirst = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LoginButton = styled.button`
    width: 540px;
    height: 76px;
    padding: 25px 0;
    border-radius: 38px;
    background-color: #ff1b6d;
    font-size: 26px;
    color: #ffffff;
    opacity: 0.6;
    border: 0;
    font-size: 26px;
    color: #ffffff;
    margin-bottom: 44.3px;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
`

export const EmPwSearchAndSignup = styled.div`
    display: flex;
    flex-direction: row;
    width: 402px;
    height: 20px;
    justify-content: space-between;
    margin-bottom: 60.7px;
`
export const EmFont = styled.div`
    width: 95px;
    height: 20px;
    font-size: 20px;
    color: white;
    cursor: pointer;
`

export const PwFont = styled.div`
    width: 113px;
    height: 20px;
    font-size: 20px;
    color: white;
    cursor: pointer;
`

export const SignupFont = styled.div`
    width: 74px;
    height: 20px;
    font-size: 20px;
    color: white;
    cursor: pointer;
`

export const EmPwSearchAndSignupBar = styled.div`
    border-right: 1px solid #ffffff;
`

export const KakaoTalkLoginButton = styled.div`
    width: 540px;
    height: 76px;
    margin-bottom: 83px;
    border: 2px solid #fae100;
    opacity: 0.6;
    padding: 18px 128px;
    border-radius: 38px;
    font-size: 26px;
    color: #fae100;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
`
