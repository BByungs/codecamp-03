import SellerCommentUIItem from "./SellerComment.presenterItem";

export default function SellerCommentUI(props: any) {
  return (
    <>
      {/* Seller에 댓글 달린거 다 나옴 */}
      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <SellerCommentUIItem sellerEl={el} key={el._id} />
      ))}
    </>
  );
}
