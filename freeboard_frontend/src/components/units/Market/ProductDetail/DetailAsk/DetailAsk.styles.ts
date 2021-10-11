import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Header = styled.div`
  display: flex;
  width: 1200px;
  justify-content: flex-start;
`;

export const HeaderChildren = styled.div`
  display: flex;
  width: 101px;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const HeaderText = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;

export const Ask = styled.div`
  width: 1200px;
  height: 161px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  margin-top: 40px;
`;

export const AskInput = styled.textarea`
  resize: none;
  height: 108px;
  width: 1198px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding-left: 20px;
  padding-top: 20px;
  outline: none;
  border: none;
`;

export const AskLine = styled.div`
  width: 1198px;
  border-bottom: 1px solid #f2f2f2;
`;

export const TextCountAndBtn = styled.div`
  display: flex;
  width: 1198px;
`;

// 문의하기 버튼 width 90 height: 52
// count width 1108

export const TextCount = styled.div`
  width: 1108px;
  height: 52px;
  padding-left: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const AskButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  width: 90px;
  height: 52px;
  cursor: pointer;
`;
