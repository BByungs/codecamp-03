import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUIPage from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";
import { FETCH_USER_LOGGED_IN } from "./ProductDetail.queries";

export default function ProductDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });
  const { data: fetchUserLoggedIn } = useQuery(FETCH_USER_LOGGED_IN);

  function onClickMain() {
    router.push("/");
  }

  return (
    <ProductDetailUIPage
      data={data}
      onClickMain={onClickMain}
      fetchUserLoggedIn={fetchUserLoggedIn}
    />
  );
}
