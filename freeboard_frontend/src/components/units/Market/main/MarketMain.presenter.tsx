import { Wrapper, Header } from "./MarketMain.styles";
import BestProduct from "./BestProduct/BestProduct.container";
import SearchBar from "./SearchBar/SearchBar.container";
import List from "./List/List.container";
import { ProductSubmut, Footer, All } from "./MarketMain.styles";
export default function MarketMainUIPage(props) {
  return (
    <All>
      <Wrapper>
        <Header>베스트 상품</Header>
        <BestProduct data={props.data} />
        <SearchBar />
        <List />
        <Footer>
          <ProductSubmut onClick={props.onClickSubmit}>
            상품 등록하기
          </ProductSubmut>
        </Footer>
      </Wrapper>
    </All>
  );
}
