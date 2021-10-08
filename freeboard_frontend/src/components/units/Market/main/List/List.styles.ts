import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
`;

export const ListWrapper = styled.div`
  width: 1200px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ProductImg = styled.img`
  width: 160px;
  height: 160px;
  margin-right: 40px;
`;

export const SearchBarLine = styled.div`
  width: 1200px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProductInfo = styled.div`
  width: 1000px;
  height: 144px;
  display: flex;
  justify-content: space-between;
`;
// productInfo 해야함

export const Info = styled.div`
  display: flex;
  flex-direction: column; ;
`;

export const ProductName = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const ProductDetail = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const ProductTag = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 26px;
`;

export const SellerInfo = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
`;

export const SellerPhoto = styled.img`
  width: 20px;
  height: 20px;
`;

export const SellerName = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  margin-left: 6px;
  margin-right: 22px;
  width: 70px;
  height: 24px;
`;

export const HeartImg = styled.img`
  height: 18.35px;
  width: 20px;
  margin-right: 6px;
`;

export const HeartCount = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoneyImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const ProductPrice = styled.div`
  font-family: Noto Sans CJK KR;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  width: 150px;
  height: 36px;
  text-align: center;
`;
