import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Container = styled.div`
  width: 1200px;
  height: 391px;
  /* background-color: gray; */
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BestProduct = styled.div`
  width: 282px;
  height: 391px;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
  /* border: 1px solid #bdbdbd; */
  /* align-items: center; */
  justify-content: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  /* border-radius: 20px; */
  :hover {
    box-shadow: none;
  }
  cursor: pointer;
`;
export const Photo = styled.img`
  width: 242px;
  height: 242px;
  margin-bottom: 20px;
`;
export const Name = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RemarksAndPrice = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Remarks = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: #4f4f4f;
  margin-bottom: 12px;
`;
export const Price = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`;

export const Heart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeartIcon = styled(FavoriteIcon)`
  font-size: 30px;
  color: #ffd600;
  margin-bottom: 3.97px;
`;

export const HeartCount = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  padding-bottom: 25px;
`;
