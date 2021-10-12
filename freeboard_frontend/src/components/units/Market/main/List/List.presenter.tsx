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
  Loader,
} from "./List.styles";
import InfiniteScroll from "react-infinite-scroller";
import { v4 as uuidv4 } from "uuid";

export default function ListUI(props) {
  return (
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
        style={{ height: "1004px" }}
      >
        <Loader>
          {props.data?.fetchUseditems.map((el) => (
            <ListWrapper
              id={el._id}
              // key={el._id}
              // key={uuidv4()}
              onClick={props.onClickProduct(el)}
            >
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
                    <ProductPrice>
                      {Number(el.price).toLocaleString()}
                    </ProductPrice>
                  </Price>
                </ProductInfo>
              </Body>
              <SearchBarLine />
            </ListWrapper>
          ))}
        </Loader>
      </InfiniteScroll>
    </Container>
  );
}
