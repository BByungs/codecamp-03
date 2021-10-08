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

export default function ListUI(props) {
  return (
    <Container>
      {props.data?.fetchUseditems.map((el) => (
        <ListWrapper key={el._id}>
          <Body>
            <ProductImg src="/images/ProductMain/testimg.png" />
            <ProductInfo>
              <div>
                <Info>
                  <ProductName>{el.name}</ProductName>
                  <ProductDetail>{el.remarks}</ProductDetail>
                  <ProductTag>#삼성전자 #갤럭시탭 #갓성비</ProductTag>
                </Info>
                <SellerInfo>
                  <SellerPhoto src="/images/ProductMain/sellerphoto.png" />
                  <SellerName>{el.seller.name}</SellerName>
                  <HeartImg src="/images/ProductMain/heartimg.png" />
                  <HeartCount>{el.pickedCount}</HeartCount>
                </SellerInfo>
              </div>
              <Price>
                <MoneyImg src="/images/ProductMain/moneyimg.png" />
                <ProductPrice>{el.price}</ProductPrice>
              </Price>
            </ProductInfo>
          </Body>
          <SearchBarLine />
        </ListWrapper>
      ))}
    </Container>
  );
}
