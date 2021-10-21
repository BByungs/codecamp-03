import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyProductUI from "./MyProduct.presenter";
import {
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_I_PICKED,
} from "./MyProduct.queries";

export default function MyProduct() {
  const [isMyUsedItem, setIsMyUsedItem] = useState(true);
  const [isMyFavorite, setIsMyFavorite] = useState(false);
  const { data: fetchUseditemsISold } = useQuery(FETCH_USED_ITEMS_I_SOLD, {
    variables: {
      page: 0,
      search: "",
    },
  });

  const { data: fetchUseditemsIPicked } = useQuery(FETCH_USED_ITEMS_I_PICKED, {
    variables: {
      page: 0,
      search: "",
    },
  });

  function onClickMyUsedItem() {
    setIsMyUsedItem(true);
    setIsMyFavorite(false);
  }

  function onClickMyFavorite() {
    setIsMyFavorite(true);
    setIsMyUsedItem(false);
  }
  return (
    <MyProductUI
      fetchUseditemsISold={fetchUseditemsISold}
      fetchUseditemsIPicked={fetchUseditemsIPicked}
      onClickMyUsedItem={onClickMyUsedItem}
      onClickMyFavorite={onClickMyFavorite}
      isMyUsedItem={isMyUsedItem}
      isMyFavorite={isMyFavorite}
    />
  );
}
