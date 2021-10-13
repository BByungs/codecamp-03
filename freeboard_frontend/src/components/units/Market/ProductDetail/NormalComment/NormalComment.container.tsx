import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import SellerCommentUI from "./NormalComment.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./NormalComment.queries";

export default function NormalComment(props) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  return (
    <SellerCommentUI data={data} fetchUserLoggedIn={props.fetchUserLoggedIn} />
  );
}
