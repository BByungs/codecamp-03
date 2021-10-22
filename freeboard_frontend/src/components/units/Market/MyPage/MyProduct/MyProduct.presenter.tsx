import {
  Wrapper,
  Header,
  Select,
  SelectLine,
  SelectText,
  ProductSearch,
  Search,
  SearchbarInput,
  SearchButton,
  Line,
} from "./MyProduct.styles";
import React from "react";
import MyUsedItem from "./MyUsedItem/MyUsedItem.container";
import MyFavorite from "./MyFavorite/MyFavorite.container";

export default function MyProductUI(props) {
  return (
    <Wrapper>
      <Header>
        <Select>
          <SelectText
            onClick={props.onClickMyUsedItem}
            isMyUsedItem={props.isMyUsedItem}
            isMyFavorite={false}
          >
            나의 상품
          </SelectText>
          <SelectLine />
          <SelectText
            onClick={props.onClickMyFavorite}
            isMyFavorite={props.isMyFavorite}
            isMyUsedItem={false}
          >
            마이찜
          </SelectText>
        </Select>

        <ProductSearch>
          <Search />
          <SearchbarInput placeholder="필요한 내용을 검색해주세요." />
        </ProductSearch>

        <SearchButton>검색</SearchButton>
      </Header>

      <Line />

      {props.isMyUsedItem && (
        <MyUsedItem
          fetchUseditemsISold={props.fetchUseditemsISold}
          soldStartPage={props.soldStartPage}
          onClickSoldPage={props.onClickSoldPage}
          soldCurrentPage={props.soldCurrentPage}
          soldLastPage={props.soldLastPage}
        />
      )}

      {props.isMyFavorite && (
        <MyFavorite
          fetchUseditemsIPicked={props.fetchUseditemsIPicked}
          onClickFavoritePage={props.onClickFavoritePage}
          favoriteStartPage={props.favoriteStartPage}
          pickedLastPage={props.pickedLastPage}
        />
      )}
    </Wrapper>
  );
}
