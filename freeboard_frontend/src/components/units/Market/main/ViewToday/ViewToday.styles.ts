import styled from "@emotion/styled";

export const ViewToday = styled.div`
  width: 196px;
  height: 505px;
  position: relative;
  top: -1100px;
  left: 1260px;
  /* background-color: black; */
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #bdbdbd;
`;

export const Text = styled.div`
  width: 91px;
  height: 27px;
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;
export const TextWrapper = styled.div`
  /* width: 156px; */
  display: flex;
  justify-content: center;
`;

export const VTWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 156px;
  height: 199px;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  cursor: pointer;
`;
export const Heart = styled.div`
  /* width: 199px; */
  display: flex;
  justify-content: flex-end;
`;
export const HeartImg = styled.img`
  width: 15px;
  height: 13.76px;
  margin-right: 5.5px;
`;
export const HeartCount = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  height: 18px;
  width: 14px;
`;

export const Photo = styled.div`
  /* width: 199px; */
  height: 60px;
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const PhotoImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const Name = styled.div`
  height: 18px;
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export const Remarks = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  height: 18px;
  color: #4f4f4f;
  margin-bottom: 4px;
`;

export const Price = styled.div`
  margin-bottom: 8px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  height: 24px;
`;

export const Tags = styled.div`
  height: 15px;
  font-family: Noto Sans CJK KR;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  color: #bdbdbd;
`;
