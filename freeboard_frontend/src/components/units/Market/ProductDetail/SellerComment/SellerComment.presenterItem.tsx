import { useState } from "react";
import {
  PresenterWrapper,
  PresenterRow,
  PresenterLeft,
  PresenterRight,
  PresenterPhoto,
  PresenterLeftCol,
  PresenterName,
  PresenterComment,
  PresenterDate,
  WideLine,
} from "./SellerComment.styles";

export default function SellerCommentUIItem(props) {
  const [isQuestion, setIsQuestion] = useState(false);

  function onClickQuestion() {
    setIsQuestion((prev) => !prev);
  }
  return (
    <>
      {!isQuestion && (
        <PresenterWrapper>
          <PresenterRow>
            <PresenterLeft>
              <PresenterPhoto src="/profilePhoto.png" />
              <PresenterLeftCol>
                <PresenterName>{props.el.user.name}</PresenterName>
                <PresenterComment>{props.el.contents}</PresenterComment>
                <PresenterDate>{props.el.createdAt}</PresenterDate>
              </PresenterLeftCol>
            </PresenterLeft>
            <PresenterRight src="/comment.png" onClick={onClickQuestion} />
          </PresenterRow>
          <WideLine />
        </PresenterWrapper>
      )}
    </>
  );
}
