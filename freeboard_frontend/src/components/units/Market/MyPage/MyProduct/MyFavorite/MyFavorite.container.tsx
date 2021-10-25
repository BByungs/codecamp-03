import { useQuery } from "@apollo/client";
import { useState } from "react";
import {
  FETCH_USED_ITEMS_COUNT_I_PICKED,
  FETCH_USED_ITEMS_I_PICKED,
} from "../MyProduct.queries";
import MyFavoriteUI from "./MyFavorite.presenter";

export default function MyFavorite(props) {
  const [favoriteStartPage, setFavoriteStartPage] = useState(1);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);

  const { data: fetchUseditemsIPicked, refetch: pickedRefetch } = useQuery(
    FETCH_USED_ITEMS_I_PICKED,
    {
      variables: {
        page: 1,
        // search: props.enterSearch,
        search: "",
      },
    }
  );

  const { data: fetchUseditemsCountIPicked } = useQuery(
    FETCH_USED_ITEMS_COUNT_I_PICKED
  );

  const pickedLastPage = Math.ceil(
    fetchUseditemsCountIPicked?.fetchUseditemsCountIPicked / 10
  );

  function onClickFavoritePage(event) {
    pickedRefetch({
      page: Number(event.target.id),
    });
    setFavoriteCurrentPage(event.target.id);
  }
  return (
    <MyFavoriteUI
      fetchUseditemsIPicked={fetchUseditemsIPicked}
      onClickFavoritePage={onClickFavoritePage}
      favoriteStartPage={favoriteStartPage}
      pickedLastPage={pickedLastPage}
    />
  );
}
