import styled from "@emotion/styled";

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

export default function SelectPhoto() {
  return (
    <Wrapper>
      <PlusImg src="/images/ProductWrite/plus.png" />
      <Text>Upload</Text>
    </Wrapper>
  );
}
