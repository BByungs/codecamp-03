import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import MyProductUI from "./MyProduct.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_I_PICKED,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
  FETCH_USED_ITEMS_COUNT_I_PICKED,
} from "./MyProduct.queries";

export default function MyProduct() {
  const [isMyUsedItem, setIsMyUsedItem] = useState(true);
  const [isMyFavorite, setIsMyFavorite] = useState(false);
  const [pickedStartPage, setPickedStartPage] = useState(1);

  const [soldStartPage, setSoldStartPage] = useState(1);
  const [soldCurrentPage, setSoldCurrentPage] = useState(1);

  const [favoriteStartPage, setFavoriteStartPage] = useState(1);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);
  const { data: fetchUseditemsISold, refetch: soldRefetch } = useQuery(
    FETCH_USED_ITEMS_I_SOLD,
    {
      variables: {
        page: 0,
        // search: "",
      },
    }
  );

  const { data: fetchUseditemsIPicked, refetch: pickedRefetch } = useQuery(
    FETCH_USED_ITEMS_I_PICKED,
    {
      variables: {
        page: 0,
        search: "",
      },
    }
  );

  // 이상함
  const { data: fetchUseditemsCountISold } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_SOLD
  );

  const { data: fetchUseditemsCountIPicked } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_PICKED
  );

  const soldLastPage = Math.ceil(
    fetchUseditemsCountISold?.fetchUseditemsCountISold / 10
  );

  const pickedLastPage = Math.ceil(
    fetchUseditemsCountIPicked?.fetchUseditemsCountIPicked / 10
  );

  function onClickMyUsedItem() {
    setIsMyUsedItem(true);
    setIsMyFavorite(false);
  }

  function onClickMyFavorite() {
    setIsMyFavorite(true);
    setIsMyUsedItem(false);
  }

  function onClickSoldPage(event) {
    soldRefetch({
      page: Number(event.target.id),
    });
    setSoldCurrentPage(event.target.id);
  }

  function onClickFavoritePage(event) {
    pickedRefetch({
      page: Number(event.target.id),
    });
    setFavoriteCurrentPage(event.target.id);
  }

  return (
    <MyProductUI
      fetchUseditemsISold={fetchUseditemsISold}
      fetchUseditemsIPicked={fetchUseditemsIPicked}
      onClickMyUsedItem={onClickMyUsedItem}
      onClickMyFavorite={onClickMyFavorite}
      isMyUsedItem={isMyUsedItem}
      isMyFavorite={isMyFavorite}
      soldStartPage={soldStartPage}
      onClickSoldPage={onClickSoldPage}
      soldCurrentPage={soldCurrentPage}
      soldLastPage={soldLastPage}
      onClickFavoritePage={onClickFavoritePage}
      favoriteStartPage={favoriteStartPage}
      pickedLastPage={pickedLastPage}
    />
  );
}
