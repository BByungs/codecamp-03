import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  FETCH_USED_ITEMS_I_SOLD,
  FETCH_USED_ITEMS_COUNT_I_SOLD,
} from "../MyProduct.queries";
import MyUsedItemUI from "./MyUsedItem.presenter";

export default function MyUsedItem(props) {
  const { data: fetchUseditemsISold, refetch } = useQuery(
    FETCH_USED_ITEMS_I_SOLD,
    {
      variables: {
        page: 1,
        search: props.enterSearch,
      },
    }
  );

  const onClickPage = (el) => () => {
    refetch({
      page: Number(el),
    });
  };

  return (
    <MyUsedItemUI
      fetchUseditemsISold={fetchUseditemsISold}
      onClickPage={onClickPage}
    />
  );
}
