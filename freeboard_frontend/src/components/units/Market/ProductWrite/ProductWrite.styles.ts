import styled from "@emotion/styled";
export const All = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 301px;
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;
export const Wrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  margin-bottom: 80px;
`;
export const ProductSubmitButton = styled.button`
  font-family: Noto Sans CJK KR;
  color: #4f4f4f;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  border: none;
  background: #bdbdbd;
  width: 179px;
  height: 52px;
  :hover {
    opacity: 0.7;
  }
  cursor: pointer;
`;
