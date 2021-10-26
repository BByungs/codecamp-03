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
} from "./NestedCommentResult.styles";

export default function NestedCommentResultUI(props: any) {
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
