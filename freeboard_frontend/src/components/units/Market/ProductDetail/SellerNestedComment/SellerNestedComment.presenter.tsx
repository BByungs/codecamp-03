import {
  Wrapper,
  Row,
  ArrowImg,
  CommentBox,
  Input,
  ButtonAndLength,
  Length,
  Button,
} from "./SellerNestedComment.styles";

export default function SellerNestedCommentUI(props) {
  return (
    <Wrapper>
      <Row>
        <ArrowImg src="/nestedArrow.png" />
        <CommentBox>
          <Input
            placeholder="답글을 등록해주세요."
            onChange={props.onChangeNestedComment}
          />
          <ButtonAndLength>
            <Length>46/100</Length>
            <Button onClick={props.onClickNestedCommentSubmit}>답글등록</Button>
          </ButtonAndLength>
        </CommentBox>
      </Row>
    </Wrapper>
  );
}