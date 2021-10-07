import {
  Wrapper,
  Body,
  Select,
  SoldOutText,
  OnSaleText,
  SelectLine,
  OnSale,
  SoldOut,
  Search,
  ProductSearch,
  SearchbarInput,
  Range,
  SearchButton,
  SearchBarLine,
} from "./SearchBar.styles";
import { Space } from "antd";

export default function SearchBarUIPage(props) {
  return (
    <Wrapper>
      <Body>
        <Select>
          <OnSale>
            <OnSaleText>판매중상품</OnSaleText>
            <SelectLine />
          </OnSale>
          <SoldOut>
            <SoldOutText>판매된상품</SoldOutText>
          </SoldOut>
        </Select>

        <ProductSearch>
          <Search />
          <SearchbarInput placeholder="제품을 검색해 주세요" />
        </ProductSearch>

        <Space direction="vertical" size={12}>
          <Range onChange={props.onChange} />
        </Space>

        <SearchButton>검색</SearchButton>
      </Body>
      <SearchBarLine />
    </Wrapper>
  );
}
