import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { CheckValidationImage } from "../library/CheckValidationImage";
import SelectedPhoto from "./SelectedPhoto";

const Wrapper = styled.div`
  width: 140px;
  height: 140px;
  background-color: #bdbdbd;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;

const PlusImg = styled.img`
  width: 14px;
  height: 14px;
  margin-bottom: 9px;
`;

const Text = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function SelectPhoto(props: any) {
  const [fileUrl, setFileUrl] = useState("");

  const fileRef = useRef<HTMLInputElement>(null);
  function onChangeFile(data: any) {
    const file = CheckValidationImage(data.target.files[0]);
    if (!file) return;
    // console.log(data.target.files[0]);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (data) => {
      setFileUrl(data.target?.result as string);
      props.onChangeFiles(file, props.index);
    };
  }

  function onClickUpload() {
    fileRef.current?.click();
  }

  function onClickDelete() {}

  return (
    <Container>
      {fileUrl || props.defaultFileUrl ? (
        <SelectedPhoto
          onClickUpload={onClickUpload}
          src={
            fileUrl || `https://storage.googleapis.com/${props.defaultFileUrl}`
          }
        />
      ) : (
        <Wrapper onClick={onClickUpload}>
          <PlusImg src="/images/ProductWrite/plus.png" />
          <Text>Upload</Text>
        </Wrapper>
      )}

      <input
        type="file"
        style={{ display: "none" }}
        ref={fileRef}
        onChange={onChangeFile}
      />
    </Container>
  );
}
