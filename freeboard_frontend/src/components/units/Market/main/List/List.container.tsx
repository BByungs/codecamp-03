import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ListUI from "./List.presenter";
import { FETCH_USED_ITEMS } from "./List.queries";

export default function List() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
      isSoldout: false,
    },
  });

  function onClickProduct(event) {
    // console.log(event.currentTarget.id);
    router.push(`/ProductWrite/${event.currentTarget.id}`);
  }

  return <ListUI data={data} onClickProduct={onClickProduct} />;
}
