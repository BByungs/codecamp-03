import {
  Wrapper,
  BestPosts,
  BestPostsTitle,
  BestPost,
  Post,
  PostThumbnail,
  PostIntroduce,
  PostTitle,
  WriterInfo,
  WriterAndDate,
  WriterNameAndPhoto,
  WriterPhoto,
  WriterName,
  WriterDate,
  LikeButtonAndCount,
  LikeButton,
  LikeCount,
  Search,
  TitleSearch,
  YearMonthDaySearch,
  ToSearch,
  PostsList,
  PostListTop,
  NumberName,
  TitleName,
  PostListTopWriter,
  WeatherName,
  Underline,
  PostListBottom,
  PostsNumner,
  PostsTitle,
  PostsWriter,
  PostsDate,
  EachPost,
  EachPosts,
  Page,
  Footer,
  PostSubmitBtn,
  PencilImg,
  Text,
  Row,
  PageNum,
  MoveToLastPage,
  MoveToLeft,
  MoveToRight,
  MoveStartPage,
  Range,
} from "./BoardList.styles";
import { Space } from "antd";

export default function BoardListUI(props) {
  return (
    <Wrapper>
      {/* 베스트 게시글 , 밑에 포스트들 까지 */}
      <BestPosts>
        <BestPostsTitle>베스트 게시글</BestPostsTitle>
        <BestPost>
          {props.fetchBoardsOfTheBest?.fetchBoardsOfTheBest?.map((el) => (
            <Post id={el._id} key={el._id}>
              <PostThumbnail src="/images/board/list/thumbnail1.png"></PostThumbnail>
              <PostIntroduce>
                <PostTitle>게시물 제목입니다.</PostTitle>
                <WriterInfo>
                  <WriterAndDate>
                    <WriterNameAndPhoto>
                      <WriterPhoto src="/images/board/list/writerPhoto.png" />
                      <WriterName>{el.writer}</WriterName>
                    </WriterNameAndPhoto>
                    <WriterDate>{el.createdAt.slice(0, 10)}</WriterDate>
                  </WriterAndDate>
                  <LikeButtonAndCount>
                    <LikeButton src="/images/board/list/likeButton.png" />
                    <LikeCount>{el.likeCount}</LikeCount>
                  </LikeButtonAndCount>
                </WriterInfo>
              </PostIntroduce>
            </Post>
          ))}
        </BestPost>
      </BestPosts>

      {/* 검색창 전체 */}
      <Search>
        <TitleSearch
          type="text"
          placeholder="제목을 검색해주세요."
          onChange={props.onChangeSearchTitle}
        />
        {/* <YearMonthDaySearch type="text" placeholder="YYYY.MM.DD ~ YYYY.MM.DD" /> */}
        {/* ################DatePicker################ */}
        <Space direction="vertical" size={12}>
          <Range onChange={props.onChange} />
        </Space>
        {/* ################DatePicker################ */}
        <ToSearch onClick={props.onClickSearh}>검색하기</ToSearch>
      </Search>

      {/* 게시글 번호, 게시글 제목, 게시글 작성자, 게시글 날짜 */}
      <PostsList>
        <PostListTop>
          <NumberName>번호</NumberName>
          <TitleName>제목</TitleName>
          <PostListTopWriter>작성자</PostListTopWriter>
          <WeatherName>날짜</WeatherName>
        </PostListTop>
        <Underline />

        <PostListBottom>
          {props.data?.fetchBoards.map((el, index) => (
            <EachPosts key={el._id}>
              <EachPost onClick={props.onClickPost} id={el._id}>
                <PostsNumner>{index + 1}</PostsNumner>
                <PostsTitle>{el.title}</PostsTitle>
                <PostsWriter>{el.writer}</PostsWriter>
                <PostsDate>{el.createdAt.slice(0, 10)}</PostsDate>
              </EachPost>
              <Underline />
            </EachPosts>
          ))}
        </PostListBottom>
      </PostsList>

      {/* 페이지버튼 , 게시물 등록하기버튼 */}
      <Footer>
        <Page>
          <MoveStartPage
            onClick={props.moveToStartPage}
            isActive={props.currentPage === 1}
            // style={{ cursor: props.isActive ? "default" : "pointer" }}
          />
          <MoveToLeft
            onClick={props.onClickLeft}
            isActive={props.currentPage === 1}
          />

          <PageNum>
            {new Array(10).fill(1).map(
              (_, idx) =>
                props.startPage + idx <= props.lastPage && (
                  <Row
                    key={props.startPage + idx}
                    onClick={props.onClickPage}
                    id={String(props.startPage + idx)}
                    changeColor={props.currentPage === props.startPage + idx}
                  >
                    {props.startPage + idx}
                  </Row>
                )
            )}
          </PageNum>

          <MoveToRight
            onClick={props.onClickRight}
            isActive={
              props.currentPage === props.lastPage ||
              props.currentPage + 10 > props.lastPage
            }
          />
          <MoveToLastPage
            onClick={props.moveToLastPage}
            isActive={props.currentPage === props.lastPage}
          />
        </Page>
        <PostSubmitBtn onClick={props.onClickSubmit}>
          <PencilImg src="/pencil.png" />
          <Text>게시물 등록하기</Text>
        </PostSubmitBtn>
      </Footer>
    </Wrapper>
  );
}
