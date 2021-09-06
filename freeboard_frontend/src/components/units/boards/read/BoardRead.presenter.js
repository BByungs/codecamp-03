import {
    Container,
    Container_Top,
    Container_Top_WriterInfo_Icon,
    Container_Top_WriterInfo,
    Container_Top_WriterInfo_ProfilePhoto,
    Container_Top_WriterInfo_Profile,
    ProfileName,
    ProfileWriteDay,
    Container_Top_WriterIcon,
    MagnetIcon,
    PointIcon,
    Underbar,
    WriteTitle,
    Title,
    BoardImg,
    Contents,
    Video,
    LikeAndHateButton,
    Like,
    Hate,
    LikeButton,
    HateButton,
    LikeNum,
    HateNum
} from "./BaordRead.styles"


export default function BoardReadUI(props) {

    return (
        <Container>
            <Container_Top>
                {/* 작성자와 아이콘 있는곳 */}
                <Container_Top_WriterInfo_Icon>
                    {/* 작성자이름 , 날짜 , 프로필사진  */}
                    <Container_Top_WriterInfo>
                        <Container_Top_WriterInfo_ProfilePhoto 
                        src="/profilePhoto.png" />
                        <Container_Top_WriterInfo_Profile>
                            <ProfileName>{props.data && props.data.fetchBoard.writer}</ProfileName>
                            <ProfileWriteDay>Date : 2021.02.18</ProfileWriteDay>
                        </Container_Top_WriterInfo_Profile>
                    </Container_Top_WriterInfo>

                    {/* 아이콘 있는 곳 */}
                    <Container_Top_WriterIcon>
                        <MagnetIcon src="/magnet.png" />
                        <PointIcon src="/point.png" />
                    </Container_Top_WriterIcon>

                </Container_Top_WriterInfo_Icon>
                <Underbar />
            </Container_Top>

            <WriteTitle>
                <Title>{props.data && props.data.fetchBoard.title}</Title>
                <BoardImg src="/boardimg.png" />
                <Contents>
                {props.data && props.data.fetchBoard.contents}
                </Contents>
            </WriteTitle>

            <Video src="/video.png" />

            <LikeAndHateButton>
                <Like>
                    <LikeButton src="/like.png" />
                    <LikeNum>1920</LikeNum>
                </Like>
                <Hate>
                    <HateButton src="/hate.png" />
                    <HateNum>1920</HateNum>
                </Hate>
            </LikeAndHateButton>

        </Container>
    )
}