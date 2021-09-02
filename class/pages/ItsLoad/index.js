import {
    Container,
    Topbar,
    Topbar_Func,
    Wifi,
    Internet,
    Battery,
    Time,
    Body,
    Application,
    AppIcon,
    AppName,
    InputLogin,
    Email,
    EmailInput,
    Underbar,
    EmailDeleteIcon,
    PasswordDeleteIcon,
    EmailFirst,
    EmailErrorMsg,
    Password,
    PasswordInput,
    PasswordFirst,
    PasswordErrorMsg,
    LoginButton,
    EmPwSearchAndSignup,
    EmFont,
    PwFont,
    SignupFont,
    EmPwSearchAndSignupBar,
    KakaoTalkLoginButton,
} from "../../styles/itsload"

import {useState} from "react"

export default function ItsLoad() {
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    
    function onChangeEmailInput (event) {
        setEmail(event.target.value)
    }

    function onChangePasswordInput (event) {
        setPassword(event.target.value)
    }

    function onClickKakaoLoginButton() {
        if(!email.includes("@")) {
            setEmailError("이메일 다시 확인해주세요")
        } else {
            setEmailError("")
        }

        if(password.length <10) {
            setPasswordError("비밀번호는 10자 이상이여야 합니다")
        } else {
            setPasswordError("")
        }

        if(email.includes("@") && password.length >=10) {
            alert("회원가입을 축하합니다")
            document.getElementById("emailInput").value = ""
            document.getElementById("passwordInput").value = ""
        }
    }

    function onClickEmailDeleteIcon() {
        document.getElementById("emailInput").value = ""
        setEmail(document.getElementById("passwordInput").value)
    }
    function onClickPasswordDeleteIcon() {
        document.getElementById("passwordInput").value = ""
        setPassword(document.getElementById("passwordInput").value)
        
    }
    return (
        <Container>
            {/* 상단 바 */}
            <Topbar>
                <Topbar_Func>
                    <Wifi />
                    <Internet />
                    <Battery />
                    <Time>12:30</Time>
                </Topbar_Func>
            </Topbar>

            {/* 상단 바 밑 부분 전체 */}
            <Body>
                {/* 어플 로고랑 이름 */}
                <Application>
                    <AppIcon src="point.png" />
                    <AppName>잇츠로드</AppName>
                </Application>

                {/* 아이디 , 비밀번호 , 에러메시지  */}
                <InputLogin>
                    {/* 이메일 입력칸 */}
                    <Email>
                        <EmailFirst>
                            <EmailInput id="emailInput" type="text" onChange={onChangeEmailInput} />
                            <EmailDeleteIcon onClick={onClickEmailDeleteIcon} src="deleteIcon.png" />
                        </EmailFirst>
                        
                    </Email>

                    {/* 이메일 에러 메시지 */}
                    <EmailErrorMsg>{emailError}</EmailErrorMsg>

                    {/* 패스워드 입력칸 */}
                    <Password>
                        <PasswordFirst>
                            <PasswordInput id="passwordInput" type="password" onChange={onChangePasswordInput} />
                            <PasswordDeleteIcon onClick={onClickPasswordDeleteIcon} src="deleteIcon.png" />
                        </PasswordFirst>
                        <Underbar />
                    </Password>
                    
                    {/* 비밀번호 에러 메시지 */}
                    <PasswordErrorMsg>{passwordError}</PasswordErrorMsg>
                </InputLogin>

                {/* 로그인 버튼 */}
                <LoginButton onClick={onClickKakaoLoginButton}>로그인</LoginButton>

                {/* 이메일찾기, 비밀번호찾기, 회원가입 버튼 */}
                <EmPwSearchAndSignup>
                    <EmFont>이메일 찾기</EmFont>
                    <EmPwSearchAndSignupBar />
                    <PwFont>비밀번호 찾기</PwFont>
                    <EmPwSearchAndSignupBar />
                    <SignupFont>회원가입</SignupFont>
                </EmPwSearchAndSignup>

                {/* 카카오톡으로 로그인 버튼*/}
                <KakaoTalkLoginButton>카카오톡으로 로그인</KakaoTalkLoginButton>
            </Body>
        </Container>
    )
}