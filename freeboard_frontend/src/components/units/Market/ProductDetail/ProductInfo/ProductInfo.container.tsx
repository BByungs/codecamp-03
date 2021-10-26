import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM } from "../ProductDetail.queries";
import ProductInfoUI from "./ProductInfo.presenter";
import { TOGGLE_USED_ITEM_PICK } from "./ProductInfo.queries";
export default function ProductInfo(props: any) {
  const router = useRouter();
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  function onClickHeart() {
    toggleUseditemPick({
      variables: {
        useditemId: router.query.useditemId,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM,
          variables: { useditemId: router.query.useditemId },
        },
      ],
    });
  }
  return <ProductInfoUI data={props.data} onClickHeart={onClickHeart} />;
}
