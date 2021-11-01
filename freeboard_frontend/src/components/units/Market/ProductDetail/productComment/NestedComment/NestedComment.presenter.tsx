import {
  Wrapper,
  Row,
  ArrowImg,
  CommentBox,
  Input,
  ButtonAndLength,
  Length,
  Button,
} from "./NestedComment.styles";

export default function NestedCommentUI(props: any) {
  return (
    <Wrapper isEdit={props.isEdit}>
      <Row>
        <ArrowImg src="/nestedArrow.png" />
        <CommentBox>
          <Input
            placeholder="답글을 등록해주세요."
            onChange={
              props.isEdit
                ? props.onChangeReplyComment
                : props.onChangeNestedComment
            }
          />
          <ButtonAndLength>
            <Length>46/100</Length>

            {props.isEdit ? (
              <Button
                onClick={props.onClickNestedCommentEdit}
                // id={props.sellerAnswersEl._id}
                isEdit={props.isEdit}
              >
                답글수정
              </Button>
            ) : (
              <Button
                onClick={props.onClickNestedCommentSubmit}
                isEdit={props.isEdit}
              >
                답글등록
              </Button>
            )}
          </ButtonAndLength>
        </CommentBox>
      </Row>
    </Wrapper>
  );
}
