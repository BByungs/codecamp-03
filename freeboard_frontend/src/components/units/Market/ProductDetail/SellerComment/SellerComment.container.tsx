import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import SellerCommentUI from "./SellerComment.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./SellerComment.queries";

export default function SellerComment() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  return <SellerCommentUI data={data} />;
}
