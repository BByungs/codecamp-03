import { useQuery } from "@apollo/client";
import ListUI from "./List.presenter";
import { FETCH_USED_ITEMS } from "./List.queries";

export default function List() {
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: {
      page: 1,
      isSoldout: false,
    },
  });

  return <ListUI data={data} />;
}
