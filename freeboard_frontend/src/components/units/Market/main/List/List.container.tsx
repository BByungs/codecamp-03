import { useQuery } from "@apollo/client";
import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";
import ListUI from "./List.presenter";
import { FETCH_USED_ITEMS } from "./List.queries";

export default function List() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
      isSoldout: false,
    },
  });

  // function onClickProduct(event) {
  //   // console.log(event.currentTarget.id);
  //   router.push(`/ProductWrite/${event.currentTarget.id}`);
  //   localStorage.setItem("todayView", event.target.id);
  // }

  const onClickProduct = (el) => () => {
    console.log(el);
    router.push(`/ProductWrite/${el._id}`);

    const views = JSON.parse(localStorage.getItem("todayView")) || [];

    let isExists = false;
    views.forEach((viewsEl) => {
      if (viewsEl._id === el._id) {
        isExists = true;
      }
    });
    if (isExists) {
      return;
    }

    if (views.length > 3) {
      views.shift();
    }

    views.push(el);
    localStorage.setItem("todayView", JSON.stringify(views));
  };

  function onLoadMore() {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(Number(data?.fetchUseditems.length) / 10),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  }

  return (
    <ListUI
      data={data}
      onClickProduct={onClickProduct}
      onLoadMore={onLoadMore}
    />
  );
}
