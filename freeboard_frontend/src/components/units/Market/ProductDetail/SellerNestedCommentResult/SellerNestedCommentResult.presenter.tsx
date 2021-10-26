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

export default function SellerNestedCommentResultUI(props: any) {
  return (
    <Wrapper>
      <Row>
        <ArrowImg src="/nestedArrow.png" />
        <UserInfo>
          <UserCol>
            <UserRow>
              <Seller>{props.sellerAnswersEl?.user?.name}</Seller>
              {/* <QuestionButton src="/comment.png" /> */}
            </UserRow>
            <Contents>{props.sellerAnswersEl.contents}</Contents>
          </UserCol>
        </UserInfo>
      </Row>
    </Wrapper>
  );
}
