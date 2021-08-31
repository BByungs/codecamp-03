import {
    Container, 
    Topbar, 
    WipiBar,
    DataBar, 
    TopbarFunc, 
    BatteryBar , 
    Time,
    Bottom, 
    Bottom_Top, 
    Search, 
    MyPageSection,
    MyPageName, 
    Profile, 
    ProfilePhoto, 
    ProfileName,
    Right, 
    List, 
    Notice,
    Event, 
    Faq, 
    Qna, 
    Underbar,
    Contour,
    Bottom_Bottom,
    Question,
    QuestionLeft,
    QuestionRight,
    QuestionNumber,
    QuestionContent,
    Footer,
    IconDiv,
    Icon,
    IconString,
    RedIcon,
    RedIconString,
    Wrapper
} from "../../styles/homeworkCss"

export default function homeworkIndex() {

    return (
        <Wrapper>
             <Container>
                {/* Topbar */}
                <Topbar>
                    <TopbarFunc>
                        <WipiBar>

                        </WipiBar>
                        <DataBar>

                        </DataBar>
                        <BatteryBar>

                        </BatteryBar>
                        <Time>12:30</Time>
                    </TopbarFunc>
                </Topbar>

                {/* Bottom */}
                <Bottom>
                    {/* Bottom_Top */}
                    <Bottom_Top>
                        <Search src="search.png" />
                        <MyPageSection>
                            <MyPageName>마이</MyPageName>
                            <Profile>
                                <ProfilePhoto src="profilePhoto.png" />
                                <ProfileName>임정아</ProfileName>
                                <Right src="right.png" />
                            </Profile>
                        </MyPageSection>
                        <List>
                            <Notice>공지사항</Notice>
                            <Event>이벤트</Event>
                            <Faq>FAQ<Underbar /></Faq>
                            <Qna>Q&A</Qna>
                        </List>
                    </Bottom_Top>
                    
                    {/* 구분선 */}
                    <Contour />

                    {/* Bottom_Bottom */}
                    <Bottom_Bottom>
                        <Question>
                            <QuestionLeft>
                                <QuestionNumber>Q.01</QuestionNumber>
                                <QuestionContent>
                                    리뷰 작성은 어떻게 하나요?
                                </QuestionContent>
                            </QuestionLeft>
                            <QuestionRight>
                                <img src="bottom.png"></img>
                            </QuestionRight>
                        </Question>
                        <Question>
                            <QuestionLeft>
                                <QuestionNumber>Q.02</QuestionNumber>
                                <QuestionContent>
                                    리뷰 수정/삭제는 어떻게 하나요?
                                </QuestionContent>
                            </QuestionLeft>
                            <QuestionRight>
                                <img src="bottom.png"></img>
                            </QuestionRight>
                        </Question>
                        <Question>
                            <QuestionLeft>
                                <QuestionNumber>Q.03</QuestionNumber>
                                <QuestionContent>
                                    아이디/비밀번호를 잊어버렸어요.
                                </QuestionContent>
                            </QuestionLeft>
                            <QuestionRight>
                                <img src="bottom.png"></img>
                            </QuestionRight>
                        </Question>
                        <Question>
                            <QuestionLeft>
                                <QuestionNumber>Q.04</QuestionNumber>
                                <QuestionContent>
                                    회원탈퇴를 하고싶어요.
                                </QuestionContent>
                            </QuestionLeft>
                            <QuestionRight>
                                <img src="bottom.png"></img>
                            </QuestionRight>
                        </Question>
                        <Question>
                            <QuestionLeft>
                                <QuestionNumber>Q.05</QuestionNumber>
                                <QuestionContent>
                                    출발지 설정은 어떻게 하나요?
                                </QuestionContent>
                            </QuestionLeft>
                            <QuestionRight>
                                <img src="bottom.png"></img>
                            </QuestionRight>
                        </Question>
                        <Question>
                            <QuestionLeft>
                                <QuestionNumber>Q.06</QuestionNumber>
                                <QuestionContent>
                                    비밀번호를 변경하고 싶어요.
                                </QuestionContent>
                            </QuestionLeft>
                            <QuestionRight>
                                <img src="bottom.png"></img>
                            </QuestionRight>
                        </Question>
                    </Bottom_Bottom>
                </Bottom>

                {/* 구분선 */}
                <Contour />

                {/* Footer */}
                <Footer>
                    <IconDiv>
                        <Icon src="home.png" />
                        <IconString>홈</IconString>
                    </IconDiv>
                    <IconDiv>
                        <Icon src="itsload.png" />
                        <IconString>잇츠로드</IconString>
                    </IconDiv>
                    <IconDiv>
                        <Icon src="myfavorit.png" />
                        <IconString>마이찜</IconString>
                    </IconDiv>
                    <IconDiv>
                        <RedIcon src="myIcon.png"/>
                        <RedIconString>마이</RedIconString>
                    </IconDiv>
                </Footer>
            </Container>
        </Wrapper>
       

    )
}
