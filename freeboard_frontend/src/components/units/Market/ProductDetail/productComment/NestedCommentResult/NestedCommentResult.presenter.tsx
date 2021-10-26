import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { FETCH_USER_LOGGED_IN } from "../Comment/Comment.queries";
import NestedComment from "../NestedComment/NestedComment.container";
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
  EditButton,
  IconRow,
  Ximg,
} from "./NestedCommentResult.styles";

export default function NestedCommentResultUI(props: any) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const replySeller =
    data?.fetchUserLoggedIn?.email === props.sellerAnswersEl?.user?.email;

  return (
    <Wrapper>
      {!props.isEdit && (
        <Row>
          <ArrowImg src="/nestedArrow.png" />
          <UserInfo>
            <UserCol>
              <UserRow>
                <Seller>{props.sellerAnswersEl?.user?.name}</Seller>
                {/* 자기 꺼만 수정할 수 있게 만들면 됨 */}

                {replySeller && (
                  <IconRow>
                    <EditButton src="/pencil.png" onClick={props.onClickEdit} />
                    <Ximg src="/ximg.png" onClick={props.onClickReplyDelete} />
                  </IconRow>
                )}

                {/* <QuestionButton src="/comment.png" /> */}
              </UserRow>
              <Contents>{props.sellerAnswersEl.contents}</Contents>
            </UserCol>
          </UserInfo>
        </Row>
      )}

      {props.isEdit && (
        <NestedComment
          isEdit={props.isEdit}
          sellerAnswersEl={props.sellerAnswersEl}
          id={props.id}
          onClickNestedCommentEdit={props.onClickNestedCommentEdit}
          onChangeReplyComment={props.onChangeReplyComment}
        />
      )}
    </Wrapper>
  );
}
