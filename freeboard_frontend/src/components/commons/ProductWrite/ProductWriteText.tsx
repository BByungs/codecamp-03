import styled from "@emotion/styled";

const Text = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 16px;
`;

export default function ProductWriteText(props) {
  return <Text>{props.name}</Text>;
}
