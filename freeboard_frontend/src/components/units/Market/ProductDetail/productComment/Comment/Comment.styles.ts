import styled from "@emotion/styled";

export const PresenterWrapper = styled.div`
  display: flex;
  width: 1198px;
  flex-direction: column;
  margin-top: 20px;
`;

export const PresenterRow = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PresenterLeft = styled.div`
  display: flex;
  height: 90px;
`;
export const PresenterPhoto = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const PresenterLeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PresenterName = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 4px;
  height: 24px;
  width: 80px;
`;

export const PresenterComment = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #4f4f4f;
  height: 24px;
  margin-bottom: 20px;
`;

export const PresenterDate = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: #bdbdbd;
  width: 60px;
  height: 18px;
`;

export const PresenterRight = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

export const WideLine = styled.div`
  border-bottom: 1px solid #bdbdbd;
  width: 1200px;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  width: 70px;
  justify-content: space-between;
  /* align-items: center; */
  /* padding-right: 20px; */
`;

export const Edit = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
