import { useState } from "react";
import NormalCommentEdit from "../NormalCommentEdit/NormalCommentEdit.container";

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
  Right,
  XButton,
} from "./NormalComment.styles";

export default function NormalCommentUIItem(props) {
  const [isEdit, setIsEdit] = useState(false);

  function onClickEdit() {
    setIsEdit((prev) => !prev);
  }
  return (
    <>
      {!isEdit && (
        <PresenterWrapper>
          <PresenterRow>
            <PresenterLeft>
              <PresenterPhoto src="/profilePhoto.png" />
              <PresenterLeftCol>
                <PresenterName>{props.el.user.name}</PresenterName>
                <PresenterComment>{props.el.contents}</PresenterComment>
                <PresenterDate>{props.el.createdAt.slice(0, 10)}</PresenterDate>
              </PresenterLeftCol>
            </PresenterLeft>
            {props.el?.user.email === props.fetchUserLoggedIn && (
              <Right>
                <PresenterRight
                  src="/normalCommentEdit.png"
                  onClick={onClickEdit}
                />
                <XButton src="/ximg.png" />
              </Right>
            )}
          </PresenterRow>
          <WideLine />
        </PresenterWrapper>
      )}
      {isEdit && <NormalCommentEdit el={props.el} setIsEdit={setIsEdit} />}
    </>
  );
}
