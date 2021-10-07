import { Wrapper, Header } from "./MarketMain.styles";
import BestProduct from "./BestProduct/BestProduct.container";
import SearchBar from "./SearchBar/SearchBar.container";
import List from "./List/List.container";
import { ProductSubmut, Footer } from "./MarketMain.styles";
export default function MarketMainUIPage() {
  return (
    <Wrapper>
      <Header>베스트 상품</Header>
      <BestProduct />
      <SearchBar />
      <List />
      <Footer>
        <ProductSubmut>상품 등록하기</ProductSubmut>
      </Footer>
    </Wrapper>
  );
}
