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
  // UploadButton1,
  UploadButton2,
  UploadButton3,
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
} from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import UploadButton1 from "../../../commons/uploads/01/upload.container";

export default function BoardWriteUI(props) {
  return (
    <Wrapper>
      <Container>
        <BigTitle>{props.isEdit ? "게시판 등록" : "게시판 수정"}</BigTitle>
        {/* 작성자 , 비밀번호 */}
        <Container_Title>
          <Writer>
            <SmallTitle>작성자</SmallTitle>
            <TitleInput
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
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
            type="text"
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
            onChange={props.onChangeContents}
          ></ContentsInput>
          <ErrorMessage>{props.contentsError}</ErrorMessage>
        </Container_Contents>

        {/* 주소 입력칸 */}
        <Container_Address>
          <SmallTitle>주소</SmallTitle>
          <AddressSearch>
            {/* myZipcode */}
            <AddressInput
              type="text"
              placeholder="07250"
              readOnly
              value={
                props.zipcode
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode
              }
            />
            <AddressSearchButton onClick={props.onClickAddressSearch}>
              우편번호 검색
            </AddressSearchButton>

            {/* daumPostcode가 isDaumPostCodeOpen이 true일때만 생김 */}
            {props.isDaumPostCodeOpen && (
              <Modal visible={true}>
                <DaumPostcode onComplete={props.handleComplete} autoClose />
              </Modal>
            )}
          </AddressSearch>

          {/* myAddress */}
          <Input
            type="text"
            readOnly
            // value={
            //   props.address || props.data?.fetchBoard.boardAddress?.address
            // }
            value={
              props.address
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address
            }
          />

          {/* addressDetail */}
          <Input
            type="text"
            placeholder="상세주소를 입력하세요"
            onChange={props.onChangeDetailAddress}
            defaultValue={props.data?.fetchBoard.boardAddress?.addressDetail}
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
          {/* 맵 돌려야 함 */}
          <Upload>
            {props.imageUrls.map((el, index) => (
              <UploadButton1
                key={`${el}_${index}`}
                index={index}
                imageUrl={el}
                onChangeFile={props.onChangeFile}
              />
            ))}
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
          <RegistrationButton onClick={props.onClickBoardSubmit}>
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
    </Wrapper>
  );
}
