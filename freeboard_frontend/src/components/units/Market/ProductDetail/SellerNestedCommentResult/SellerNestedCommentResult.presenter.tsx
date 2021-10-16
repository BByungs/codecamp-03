import { WideLine } from "../NormalComment/NormalComment.styles";
import {
  Wrapper,
  Row,
  ArrowImg,
  UserInfo,
  UserPhoto,
  UserCol,
  UserRow,
  Seller,
  QuestionButton,
  Contents,
} from "./SellerNestedCommentResult.styles";

export default function SellerNestedCommentResultUI(props) {
  return (
    <Wrapper>
      <Row>
        <ArrowImg src="/nestedArrow.png" />
        <UserInfo>
          <UserCol>
            <UserRow>
              <Seller>판매자</Seller>
              <QuestionButton src="/comment.png" />
            </UserRow>
            <Contents>{props.el.contents}</Contents>
          </UserCol>
        </UserInfo>
      </Row>
    </Wrapper>
  );
}
