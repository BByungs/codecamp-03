import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  height: 147px;
  display: flex;
  margin-top: 40px;
`;

export const ProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 17px;
`;

export const Column = styled.div`
  height: 147px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 6px;
`;

// ! ###############################

export const EditBox = styled.div`
  width: 1140px;
  height: 117px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
  /* margin-top: 40px; */
`;

export const EditInput = styled.textarea`
  resize: none;
  height: 64px;
  width: 1137px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding-left: 20px;
  padding-top: 20px;
  outline: none;
  border: none;
`;

export const EditLine = styled.div`
  width: 1137px;
  border-bottom: 1px solid #f2f2f2;
`;

export const TextCountAndBtn = styled.div`
  display: flex;
  width: 1140px;
`;

export const TextCount = styled.div`
  width: 1049px;
  height: 52px;
  padding-left: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
`;

export const EditButton = styled.button`
  border: none;
  background-color: #ffd600;
  color: black;
  width: 90px;
  height: 52px;
  cursor: pointer;
`;
