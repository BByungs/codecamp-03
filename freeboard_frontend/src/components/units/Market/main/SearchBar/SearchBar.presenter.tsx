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
            <OnSaleText onClick={props.onClickOnSale}>판매중상품</OnSaleText>
            {!props.isSoldout && <SelectLine />}
            {/* <SelectLine /> */}
          </OnSale>
          <SoldOut>
            <SoldOutText onClick={props.onClickSoldout}>판매된상품</SoldOutText>
            {props.isSoldout && <SelectLine />}
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
