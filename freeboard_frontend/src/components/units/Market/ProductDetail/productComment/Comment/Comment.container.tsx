import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommentUI from "./Comment.presenter";
import { FETCH_USED_ITEM_QUESTIONS } from "./Comment.queries";

export default function Comment(props: any) {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: router.query.useditemId,
    },
  });

  return <CommentUI data={data} />;
}
