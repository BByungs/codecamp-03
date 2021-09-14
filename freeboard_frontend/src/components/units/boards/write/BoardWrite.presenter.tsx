import {
  Container,
  BigTitle,
  SmallTitle,
  Container_Title,
  TitleInput,
  Container_Contents,
  ContentsInput,
  Container_Address,
  AddressSearch,
  AddressInput,
  AddressSearchButton,
  Container_Youtube,
  PhotoAttach,
  Upload,
  UploadButton,
  StringPlus,
  StringUpload,
  MainSetting,
  RadioButton,
  StringRadioButton,
  RadioButtonInput,
  Check,
  RegistrationButton,
  Writer,
  Input,
  ErrorMessage,
  Title,
  TitleFont,
  Wrapper,
  Address,
} from "./BoardWrite.styles";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Container>
        <BigTitle>{props.isEdit ? "게시물 등록" : "게시물 수정"}</BigTitle>
        {/* 작성자 , 비밀번호 */}
        <Container_Title>
          <Writer>
            <SmallTitle>작성자</SmallTitle>
            <TitleInput
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
            />
            <ErrorMessage>{props.writerError}</ErrorMessage>
          </Writer>
          <Writer>
            <SmallTitle>비밀번호</SmallTitle>
            <TitleInput
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <ErrorMessage>{props.passwordError}</ErrorMessage>
          </Writer>
        </Container_Title>

        <Title>
          <TitleFont>제목</TitleFont>
          <Input
            placeholder="제목을 작성해 주세요."
            onChange={props.onChangeTitle}
          />
          <ErrorMessage>{props.titleError}</ErrorMessage>
        </Title>

        {/* 내용 입력칸 */}
        <Container_Contents>
          <SmallTitle>내용</SmallTitle>
          <ContentsInput
            placeholder="내용을 작성해주세요"
            onChange={props.onChangeContent}
          ></ContentsInput>
          <ErrorMessage>{props.contentError}</ErrorMessage>
        </Container_Contents>

        {/* 주소 입력칸 */}
        <Container_Address>
          <SmallTitle>주소</SmallTitle>
          <AddressSearch>
            <AddressInput type="text" defaultValue={props.myZipcode} />
            <AddressSearchButton onClick={props.onToggleZipcode}>
              우편번호 검색
            </AddressSearchButton>
            {props.isOpen && (
              <Address visible={true} onCancel={props.onToggleZipcode}>
                <DaumPostcode onComplete={props.handleComplete} />
              </Address>
            )}
          </AddressSearch>
          <Input type="text" defaultValue={props.myAddress} />
          <Input
            type="text"
            placeholder="상세주소를 입력하세요"
            onChange={props.InputDetailAddress}
          />
        </Container_Address>

        {/* 유튜브 입력칸 */}
        <Container_Youtube>
          <SmallTitle>유튜브</SmallTitle>
          <Input
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
          ></Input>
        </Container_Youtube>

        {/* 사진 첨부 */}
        <PhotoAttach>
          <SmallTitle>사진 첨부</SmallTitle>
          <Upload>
            <UploadButton>
              <StringPlus>+</StringPlus>
              <StringUpload>upload</StringUpload>
            </UploadButton>
            <UploadButton>
              <StringPlus>+</StringPlus>
              <StringUpload>upload</StringUpload>
            </UploadButton>
            <UploadButton>
              <StringPlus>+</StringPlus>
              <StringUpload>upload</StringUpload>
            </UploadButton>
          </Upload>
        </PhotoAttach>

        {/* 메인 설정 */}
        <MainSetting>
          <SmallTitle>메인 설정</SmallTitle>
          <Check>
            <RadioButton>
              <RadioButtonInput type="radio" name="button" value="youtube" />
              <StringRadioButton>유튜브</StringRadioButton>
            </RadioButton>
            <RadioButton>
              <RadioButtonInput type="radio" name="button" value="photo" />
              <StringRadioButton>사진</StringRadioButton>
            </RadioButton>
          </Check>
        </MainSetting>

        {/* 등록하기 버튼(false) */}
        {props.isEdit && (
          <RegistrationButton onClick={props.onClickButton}>
            등록하기
          </RegistrationButton>
        )}
        {/* 수정하기 버튼(true) */}
        {!props.isEdit && (
          <RegistrationButton onClick={props.onclickEdit}>
            수정하기
          </RegistrationButton>
        )}
      </Container>
      {/* <DeleteButton>삭제하기</DeleteButton> */}
    </Wrapper>
  );
}
