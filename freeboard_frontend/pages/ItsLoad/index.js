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
    DeleteIcon,
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

export default function ItsLoad() {
    
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
                            <EmailInput type="text" />
                            <DeleteIcon src="deleteIcon.png" />
                        </EmailFirst>
                        <Underbar />
                    </Email>

                    {/* 이메일 에러 메시지 */}
                    <EmailErrorMsg></EmailErrorMsg>

                    {/* 패스워드 입력칸 */}
                    <Password>
                        <PasswordFirst>
                            <PasswordInput type="password" />
                            <DeleteIcon src="deleteIcon.png" />
                        </PasswordFirst>
                        <Underbar />
                    </Password>
                    
                    {/* 비밀번호 에러 메시지 */}
                    <PasswordErrorMsg></PasswordErrorMsg>
                </InputLogin>

                {/* 로그인 버튼 */}
                <LoginButton>로그인</LoginButton>

                {/* 이메일찾기, 비밀번호찾기, 회원가입 버튼 */}
                <EmPwSearchAndSignup>
                    <EmFont>이메일 찾기</EmFont>
                    <EmPwSearchAndSignupBar />
                    <PwFont>비밀번호 찾기</PwFont>
                    <EmPwSearchAndSignupBar />
                    <SignupFont>회원가입</SignupFont>
                </EmPwSearchAndSignup>

                {/* 카카오톡으로 로그인 버튼*/}
                <KakaoTalkLoginButton>
                    카카오톡으로 로그인
                </KakaoTalkLoginButton>
            </Body>
        </Container>
    )
}