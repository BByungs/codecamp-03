import {
  Container,
  ListWrapper,
  SearchBarLine,
  Body,
  ProductImg,
  ProductInfo,
  Info,
  ProductName,
  ProductDetail,
  ProductTag,
  SellerInfo,
  SellerPhoto,
  SellerName,
  HeartImg,
  HeartCount,
  Price,
  MoneyImg,
  ProductPrice,
} from "./List.styles";

export default function ListUI() {
  return (
    <Container>
      <ListWrapper>
        <Body>
          <ProductImg src="/images/ProductMain/testimg.png" />
          <ProductInfo>
            <div>
              <Info>
                <ProductName>삼성전자 갤럭시 탭A10.1</ProductName>
                <ProductDetail>2019 LTE 32GB</ProductDetail>
                <ProductTag>#삼성전자 #갤럭시탭 #갓성비</ProductTag>
              </Info>
              <SellerInfo>
                <SellerPhoto src="/images/ProductMain/sellerphoto.png" />
                <SellerName>판매자</SellerName>
                <HeartImg src="/images/ProductMain/heartimg.png" />
                <HeartCount>1</HeartCount>
              </SellerInfo>
            </div>
            <Price>
              <MoneyImg src="/images/ProductMain/moneyimg.png" />
              <ProductPrice>123,243원</ProductPrice>
            </Price>
          </ProductInfo>
        </Body>
        <SearchBarLine />
      </ListWrapper>
    </Container>
  );
}
