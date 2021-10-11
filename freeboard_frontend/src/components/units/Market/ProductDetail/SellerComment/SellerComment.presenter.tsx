import SellerCommentUIItem from "./SellerComment.presenterItem";

export default function SellerCommentUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <SellerCommentUIItem el={el} key={el._id} />
      ))}
    </>
  );
}
