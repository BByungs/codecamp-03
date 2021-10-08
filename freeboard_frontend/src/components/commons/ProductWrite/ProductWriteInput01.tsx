import styled from "@emotion/styled";

const Input = styled.input`
  width: 996px;
  height: 52px;
  padding-top: 14px;
  padding-left: 16px;
  padding-bottom: 14px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  outline: none;
  border: 1px solid #bdbdbd;
`;

const Text = styled.div`
  margin-bottom: 16px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export default function ProductWriteInput01(props) {
  return (
    <Wrapper>
      <Text>{props.name}</Text>
      <Input type={props.type} placeholder={props.placeholder} />
    </Wrapper>
  );
}
