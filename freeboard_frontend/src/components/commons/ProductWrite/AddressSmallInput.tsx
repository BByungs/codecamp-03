import styled from "@emotion/styled";

const Input = styled.input`
  border: 1px solid #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 14px 20px 14px 20px;
  width: 108px;
  height: 52px;
  outline: none;
`;

export default function AddressSmallInput(props) {
  return (
    <Input
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      {...props.register}
    />
  );
}
