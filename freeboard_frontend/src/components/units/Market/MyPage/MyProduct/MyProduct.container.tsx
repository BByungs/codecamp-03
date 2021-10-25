import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import MyProductUI from "./MyProduct.presenter";
import {
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
} from "./MyProduct.queries";

export default function MyProduct() {
  const [isMyUsedItem, setIsMyUsedItem] = useState(true);
  const [isMyFavorite, setIsMyFavorite] = useState(false);
  const [pickedStartPage, setPickedStartPage] = useState(1);
  const [search, setSearch] = useState("");
  const [enterSearch, setEnterSearch] = useState("");

  const { data: fetchUseditemsCountIPicked } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_PICKED
  );

  const pickedLastPage = Math.ceil(
    fetchUseditemsCountIPicked?.fetchUseditemsCountIPicked / 10
  );

  function onClickMyUsedItem() {
    setIsMyUsedItem(true);
    setIsMyFavorite(false);
    setEnterSearch("");
  }

  function onClickMyFavorite() {
    setIsMyFavorite(true);
    setIsMyUsedItem(false);
    setEnterSearch("");
  }

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }

  function onClickSearch() {
    setEnterSearch(search);
  }
  return (
    <MyProductUI
      onClickMyUsedItem={onClickMyUsedItem}
      onClickMyFavorite={onClickMyFavorite}
      isMyUsedItem={isMyUsedItem}
      isMyFavorite={isMyFavorite}
      pickedLastPage={pickedLastPage}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
      enterSearch={enterSearch}
    />
  );
}
