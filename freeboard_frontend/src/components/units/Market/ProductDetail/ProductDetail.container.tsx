import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductDetailUIPage from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  function onClickMain() {
    router.push("/");
  }

  return <ProductDetailUIPage data={data} onClickMain={onClickMain} />;
}
