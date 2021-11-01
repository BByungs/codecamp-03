import {
  Button,
  ButtonAndLength,
  CommentBox,
  Input,
  Length,
} from "../NestedComment/NestedComment.styles";
import { Col, Name, Row, UserPhoto } from "./questionsEdit.styles";

export default function QuestionsEditUI(props) {
  return (
    <>
      <Row>
        <UserPhoto src="/profilePhoto.png" />
        <Col>
          <Name>{props?.sellerEl?.user?.name}</Name>
          <CommentBox>
            <Input
              placeholder="답글을 등록해주세요."
              onChange={props.onChangeQuestionsEdit}
            />
            <ButtonAndLength>
              <Length>46/100</Length>
              <Button onClick={props.onClickQuestionsEditSubmit}>
                답글수정
              </Button>
            </ButtonAndLength>
          </CommentBox>
        </Col>
      </Row>
    </>
  );
}
