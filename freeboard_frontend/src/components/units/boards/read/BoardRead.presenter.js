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
  HateNum,
  Wrapper_Bottom,
  EditButton,
  Button,
  ListMoveButton,
  Underline,
  Comment_Submit_Container,
  CommentImg,
  Comment_Img_Name,
  CommentName,
  StarScope,
  StarImg,
  Comment_Submit,
  Comment_Submit_Input,
  Comment_Submit_Write_Button,
  Underline2,
  Comment_Submit_StringCount,
  Comment_Submit_Button,
  CommentList,
  CommentList_Comment_Container,
  CommentList_Profile_StarScope,
  CommentList_ProfilePhoto,
  CommentList_Writer,
  CommentList_Comment_Read,
  CommentList_Write_Date,
  Comment_Submit_String,
  CommentList_Comment_Container_Top,
  CommentList_Comment_Container_Top_Right,
  CommentPencil,
  CommentX,
  Underline3,
  Writer_Password_Starscope,
  Comment_Writer_Input,
  Comment_Password_Input,
  List,
  Comments_Edit,
  Edit_Writer_Password_Starscope,
  Edit_Comment_Writer_Input,
  Edit_Comment_Password_Input,
  Edit_Comment_Submit,
  Edit_Comment_Submit_Input,
  Edit_Comment_Submit_Write_Button,
  Edit_Comment_Submit_StringCount,
  Edit_Comment_Submit_String,
  Edit_Comment_Submit_Button,
} from "./BaordRead.styles";

export default function BoardReadUI(props) {
  return (
    <Wrapper_Bottom>
      <Container>
        <Container_Top>
          {/* 작성자와 아이콘 있는곳 */}
          <Container_Top_WriterInfo_Icon>
            {/* 작성자이름 , 날짜 , 프로필사진  */}
            <Container_Top_WriterInfo>
              <Container_Top_WriterInfo_ProfilePhoto src="/profilePhoto.png" />
              <Container_Top_WriterInfo_Profile>
                <ProfileName>
                  {props.data && props.data.fetchBoard.writer}
                </ProfileName>
                <ProfileWriteDay>
                  Date :{" "}
                  {props.data && props.data.fetchBoard.createdAt.slice(0, 10)}
                </ProfileWriteDay>
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
          <Contents>{props.data && props.data.fetchBoard.contents}</Contents>
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
      <Button>
        <ListMoveButton onClick={props.onClickMoveToList}>
          목록으로
        </ListMoveButton>
        <EditButton onClick={props.onClickMoveEdit}>수정하기</EditButton>
      </Button>

      <Underline />

      {/* 댓글 적는 곳 */}
      <Comment_Submit_Container>
        {/* 댓글아이콘 , 댓글 */}
        <Comment_Img_Name>
          <CommentImg src="/commentImg.png" />
          <CommentName>댓글</CommentName>
        </Comment_Img_Name>
        <Writer_Password_Starscope>
          <Comment_Writer_Input
            type="text"
            onChange={props.onChangeWriterInput}
            placeholder="Writer"
            defaultValue=""
          />
          <Comment_Password_Input
            type="password"
            onChange={props.onChangePasswordInput}
            placeholder="Password"
          />
          {/* 별점 */}
          <StarScope>
            <StarImg src="/star.png" />
            <StarImg src="/star.png" />
            <StarImg src="/star.png" />
            <StarImg src="/star.png" />
            <StarImg src="/star.png" />
          </StarScope>
        </Writer_Password_Starscope>
        {/* 댓글 등록 부분 */}
        <Comment_Submit>
          <Comment_Submit_Input
            onChange={props.onChangeCommentInput}
          ></Comment_Submit_Input>
          <Underline2 />
          <Comment_Submit_Write_Button>
            <Comment_Submit_StringCount>
              <Comment_Submit_String>46/100</Comment_Submit_String>
            </Comment_Submit_StringCount>
            <Comment_Submit_Button onClick={props.onClickCommentSubmit}>
              등록하기
            </Comment_Submit_Button>
          </Comment_Submit_Write_Button>
        </Comment_Submit>
      </Comment_Submit_Container>

      {/* 댓글 리스트 맵 돌려야 하는얘 */}
      <CommentList>
        {/* map에서 key값을 받아와야 먹힘 */}
        {props.commentsData?.fetchBoardComments
          .map((el) => (
            <CommentList_Comment_Container key={el._id}>
              {props.isActive && el._id === props.eventTargetId && (
                <Comments_Edit>
                  <Edit_Writer_Password_Starscope>
                    <Edit_Comment_Writer_Input
                      type="text"
                      placeholder="Writer"
                    />
                    <Edit_Comment_Password_Input
                      type="password"
                      onChange={props.onChangeEditCommentPasswordInput}
                      placeholder="Password"
                    />
                    {/* 별점 */}
                    <StarScope>
                      <StarImg src="/star.png" />
                      <StarImg src="/star.png" />
                      <StarImg src="/star.png" />
                      <StarImg src="/star.png" />
                      <StarImg src="/star.png" />
                    </StarScope>
                  </Edit_Writer_Password_Starscope>
                  {/* 댓글 등록 부분 */}
                  <Edit_Comment_Submit>
                    <Edit_Comment_Submit_Input
                      onChange={props.onChangeEditCommentSubmitInput}
                    ></Edit_Comment_Submit_Input>
                    <Underline2 />
                    <Edit_Comment_Submit_Write_Button>
                      <Edit_Comment_Submit_StringCount>
                        <Edit_Comment_Submit_String>
                          46/100
                        </Edit_Comment_Submit_String>
                      </Edit_Comment_Submit_StringCount>
                      <Edit_Comment_Submit_Button
                        onClick={props.onClickEditCommentButton}
                        id={el._id}
                      >
                        수정하기
                      </Edit_Comment_Submit_Button>
                    </Edit_Comment_Submit_Write_Button>
                  </Edit_Comment_Submit>
                </Comments_Edit>
              )}
              {el._id !== props.eventTargetId && (
                <List>
                  <CommentList_Comment_Container_Top>
                    <CommentList_ProfilePhoto src="/CommentList_Profile.png" />
                    <CommentList_Comment_Container_Top_Right>
                      <CommentList_Profile_StarScope>
                        <CommentList_Writer>{el.writer}</CommentList_Writer>
                        <StarScope>
                          <StarImg src="/star.png" />
                          <StarImg src="/star.png" />
                          <StarImg src="/star.png" />
                          <StarImg src="/star.png" />
                          <StarImg src="/star.png" />
                        </StarScope>
                        <CommentPencil
                          src="/commentPencil.png"
                          onClick={props.onClickEdit}
                          id={el._id}
                        />
                        <CommentX src="/commentX.png" />
                      </CommentList_Profile_StarScope>
                      <CommentList_Comment_Read>
                        {el.contents}
                      </CommentList_Comment_Read>
                      <CommentList_Write_Date>
                        {el.createdAt.slice(0, 10)}
                      </CommentList_Write_Date>
                    </CommentList_Comment_Container_Top_Right>
                  </CommentList_Comment_Container_Top>
                  <Underline3 />
                </List>
              )}
            </CommentList_Comment_Container>
          ))
          .reverse()}
      </CommentList>
    </Wrapper_Bottom>
  );
}
