import styled from "@emotion/styled";
import { useRef } from "react";

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

export default function SelectPhoto(props) {
  // const fileRef = useRef<HTMLInputElement>();
  // function onClickUpload() {
  //   fileRef.current?.click();
  // }
  return (
    <Container>
      <Wrapper>
        <PlusImg src="/images/ProductWrite/plus.png" />
        <Text>Upload</Text>
      </Wrapper>
      {/* <input
        style={{ display: "none" }}
        type="file"
        {...props.register}
        ref={fileRef}
      /> */}
    </Container>
  );
}
