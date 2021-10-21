import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  width: 138px;
  height: 36px;
  margin-bottom: 40px;
`;

export const H3 = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  height: 24px;
`;

export const TextInput = styled.input`
  width: 690px;
  height: 52px;
  padding-left: 16px;
  /* padding-top: 14px; */
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  outline: none;
  border: none;
  background: #f6f6f6;
  /* opacity: 0.3; */
`;

export const Box = styled.div`
  display: flex;
  width: 894px;
  height: 52px;
  align-items: center;
`;

export const ChangePasswordButton = styled.button`
  width: 180px;
  height: 52px;
  background: #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  color: #4f4f4f;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const ButtonWrapper = styled.div`
  width: 894px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
