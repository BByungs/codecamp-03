import {Wrapper , BestPosts , BestPostsTitle , BestPost , Post , PostThumbnail,
        PostIntroduce , PostTitle , WriterInfo , WriterAndDate,
        WriterNameAndPhoto , WriterPhoto , WriterName , WriterDate,
        LikeButtonAndCount , LikeButton , LikeCount, Search,
        TitleSearch, YearMonthDaySearch , ToSearch , PostsList,
        PostListTop, NumberName, TitleName, PostListTopWriter, WeatherName,
        Underline , PostListBottom , PostsNumner , PostsTitle , PostsWriter,
        PostsDate , EachPost , EachPosts, Page , Footer, LeftArrow, RightArrow , PostSubmitBtn,
        PencilImg, Text, Container} from "./boardsBestRead.style"

export default function BoardBestUI(props) {

    return (
        <Container>
            <Wrapper>
            {/* 베스트 게시글 , 밑에 포스트들 까지 */}
            <BestPosts>
                <BestPostsTitle>베스트 게시글</BestPostsTitle>
                <BestPost>
                    <Post>
                        <PostThumbnail src="/thumbnail1.png"></PostThumbnail>
                        <PostIntroduce>
                            <PostTitle>게시물 제목입니다.</PostTitle>
                            <WriterInfo>
                                <WriterAndDate>
                                    <WriterNameAndPhoto>
                                        <WriterPhoto src="/writerPhoto.png" />
                                        <WriterName>노원두</WriterName>
                                    </WriterNameAndPhoto>
                                    <WriterDate>Date: 2021.02.18</WriterDate>
                                </WriterAndDate>
                                <LikeButtonAndCount>
                                    <LikeButton src="/likeButton.png" />
                                    <LikeCount>356</LikeCount>
                                </LikeButtonAndCount>
                            </WriterInfo>
                        </PostIntroduce>
                    </Post>
                    <Post>
                        <PostThumbnail src="/thumbnail2.png"></PostThumbnail>
                        <PostIntroduce>
                            <PostTitle>게시물 제목입니다.</PostTitle>
                            <WriterInfo>
                                <WriterAndDate>
                                    <WriterNameAndPhoto>
                                        <WriterPhoto src="/writerPhoto.png" />
                                        <WriterName>노원두</WriterName>
                                    </WriterNameAndPhoto>
                                    <WriterDate>Date: 2021.02.18</WriterDate>
                                </WriterAndDate>
                                <LikeButtonAndCount>
                                    <LikeButton src="/likeButton.png" />
                                    <LikeCount>356</LikeCount>
                                </LikeButtonAndCount>
                            </WriterInfo>
                        </PostIntroduce>
                    </Post>
                    <Post>
                        <PostThumbnail src="/thumbnail3.png"></PostThumbnail>
                        <PostIntroduce>
                            <PostTitle>게시물 제목입니다.</PostTitle>
                            <WriterInfo>
                                <WriterAndDate>
                                    <WriterNameAndPhoto>
                                        <WriterPhoto src="/writerPhoto.png" />
                                        <WriterName>노원두</WriterName>
                                    </WriterNameAndPhoto>
                                    <WriterDate>Date: 2021.02.18</WriterDate>
                                </WriterAndDate>
                                <LikeButtonAndCount>
                                    <LikeButton src="/likeButton.png" />
                                    <LikeCount>356</LikeCount>
                                </LikeButtonAndCount>
                            </WriterInfo>
                        </PostIntroduce>
                    </Post>
                    <Post>
                        <PostThumbnail src="/thumbnail4.png"></PostThumbnail>
                        <PostIntroduce>
                            <PostTitle>게시물 제목입니다.</PostTitle>
                            <WriterInfo>
                                <WriterAndDate>
                                    <WriterNameAndPhoto>
                                        <WriterPhoto src="/writerPhoto.png" />
                                        <WriterName>노원두</WriterName>
                                    </WriterNameAndPhoto>
                                    <WriterDate>Date: 2021.02.18</WriterDate>
                                </WriterAndDate>
                                <LikeButtonAndCount>
                                    <LikeButton src="/likeButton.png" />
                                    <LikeCount>356</LikeCount>
                                </LikeButtonAndCount>
                            </WriterInfo>
                        </PostIntroduce>
                    </Post>
                </BestPost>
            </BestPosts>
            
            {/* 검색창 전체 */}
            <Search>
                <TitleSearch type="text" placeholder="제목을 검색해주세요." />
                <YearMonthDaySearch type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD"/>
                <ToSearch>검색하기</ToSearch>
            </Search>

            {/* 게시글 번호, 게시글 제목, 게시글 작성자, 게시글 날짜 */}
            <PostsList>
                {/* 상단 부분 */}
                <PostListTop>
                    <NumberName>번호</NumberName>
                    <TitleName>제목</TitleName>
                    <PostListTopWriter>작성자</PostListTopWriter>
                    <WeatherName>날짜</WeatherName>
                </PostListTop>
                <Underline />

                {/* 밑 부분 */}
                <PostListBottom>
                    {props.data?.fetchBoards.map((el,index)=>(
                        <EachPosts key={el._id}>
                            <EachPost>
                                <PostsNumner>{index+1}</PostsNumner>
                                <PostsTitle>{el.title}</PostsTitle>
                                <PostsWriter>{el.writer}</PostsWriter>
                                <PostsDate>{el.createdAt.slice(0,10)}</PostsDate>
                            </EachPost>
                            <Underline />
                        </EachPosts>
                    )).reverse()}
                </PostListBottom>
            </PostsList>

            {/* 맨 밑에 페이지 버튼 , 게시물 등록하기 버튼 있는데 */}
            <Footer>
                <Page>
                    {/* <LeftArrow src="/leftArrow.png" />
                    <RightArrow src="/rightArrow.png" /> */}
                </Page>
                <PostSubmitBtn onClick={props.onClickSubmit}>
                    <PencilImg src="/pencil.png" />
                    <Text>게시물 등록하기</Text>
                </PostSubmitBtn>
            </Footer>
        </Wrapper>
    </Container>
        
    )
}

