import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Wrapper = styled.div`
  /* width: 792px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductInfo = styled.div`
  width: 792px;
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 128px;
`;
export const Remarks = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: #bdbdbd;
  margin-bottom: 4px;
  margin-top: 20px;
`;

export const Name = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: #4f4f4f;
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 36px;
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

export const ProductPhotoWrapper = styled.div`
  width: 504px;
  height: 482px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`;

export const PhotoWrapper = styled.div`
  width: 384px;
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.div`
  width: 296px;
  height: 296px;
  /* background-color: #bdbdbd; */
`;

export const PhotoList = styled.div`
  width: 384px;
  height: 78px;
  display: flex;
  justify-content: space-between;
`;

export const EachPhoto = styled.div`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
`;

export const Contents = styled.div`
  width: 792px;
  font-family: Noto Sans CJK KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const TagsWrapper = styled.div`
  width: 792px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 40px;
`;

export const Tags = styled.div`
  height: 24px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #bdbdbd;
`;
