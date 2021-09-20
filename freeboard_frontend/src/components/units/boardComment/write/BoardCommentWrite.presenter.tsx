import {
  BottomWrapper,
  EditButton,
  SubmitButton,
  Contents,
  ContentsLength,
  ContentsWrapper,
  Input,
  InputWrapper,
  PencilIcon,
  Star,
  Wrapper,
} from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(props) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <>
          <PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </>
      )}
      <InputWrapper>
        <Input
          placeholder="작성자"
          readOnly={Boolean(props.el?.writer)}
          defaultValue={props.el?.writer}
          onChange={props.onChangeMyWriter}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeMyPassword}
        />
        <Star onChange={props.onChangeStar} />
      </InputWrapper>
      <ContentsWrapper>
        <Contents
          defaultValue={props.el?.contents}
          onChange={props.onChangeMyContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          <ContentsLength>0/100</ContentsLength>
          {props.isEdit && (
            <EditButton id={props.el?._id} onClick={props.onClickUpdate}>
              수정하기
            </EditButton>
          )}
          {!props.isEdit && (
            <SubmitButton id={props.el?._id} onClick={props.onClickWrite}>
              등록하기
            </SubmitButton>
          )}
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
