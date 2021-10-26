import CommentUIItem from "./Comment.presenterItem";

export default function CommentUI(props: any) {
  return (
    <>
      {/* Seller에 댓글 달린거 다 나옴 */}
      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <CommentUIItem sellerEl={el} key={el._id} />
      ))}
    </>
  );
}
