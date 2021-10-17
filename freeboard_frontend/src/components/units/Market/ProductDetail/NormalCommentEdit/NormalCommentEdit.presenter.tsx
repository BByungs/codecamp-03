import React from "react";
import {
  Wrapper,
  ProfilePhoto,
  Column,
  Name,
  EditBox,
  EditInput,
  EditLine,
  TextCountAndBtn,
  TextCount,
  EditButton,
} from "./NormalCommentEdit.styles";

export default function NormalCommentEditUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickEdit)}>
      <Wrapper>
        <ProfilePhoto src="/profilePhoto.png" />
        <Column>
          <Name>{props.normalEl.user.name}</Name>
          <EditBox>
            <EditInput
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              {...props.register("Editcontents")}
            />
            <EditLine />
            <TextCountAndBtn>
              <TextCount>0/100</TextCount>
              <EditButton type="submit">수정하기</EditButton>
            </TextCountAndBtn>
          </EditBox>
        </Column>
      </Wrapper>
    </form>
  );
}
