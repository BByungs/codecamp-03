import { useQuery } from "@apollo/client";
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

  function onClickProduct(event) {
    // console.log(event.currentTarget.id);
    router.push(`/ProductWrite/${event.currentTarget.id}`);
  }

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
