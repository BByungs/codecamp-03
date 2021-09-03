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
} from "../../../../styles/detailPage-nonMembers-basic"
import { useRouter } from "next/router"
import { useQuery , gql} from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!) {
        fetchBoard(boardId:$boardId) {
            writer
            title
            contents
        }
    }
`

export default function DetailPageNonMembersBasicPage() {
    
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {boardId: router.query.detailPageNonMembersBasic}
    })
    
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
                            <ProfileName>{data?.fetchBoard.writer}</ProfileName>
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
                <Title>{data?.fetchBoard.title}</Title>
                <BoardImg src="/boardimg.png" />
                <Contents>
                {data?.fetchBoard.contents}
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
