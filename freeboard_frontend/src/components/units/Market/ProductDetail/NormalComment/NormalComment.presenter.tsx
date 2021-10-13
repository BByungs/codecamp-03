import SellerCommentUIItem from "./NormalComment.presenterItem";

export default function NormalCommentUI(props) {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el) => (
        <SellerCommentUIItem
          el={el}
          key={el._id}
          fetchUserLoggedIn={props.fetchUserLoggedIn}
        />
      ))}
    </>
  );
}
