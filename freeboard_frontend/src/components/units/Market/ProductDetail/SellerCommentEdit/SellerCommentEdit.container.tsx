import { useForm } from "react-hook-form";
import SellerCommentEditUI from "./SellerCommentEdit.presenter";

export default function SellerCommentEdit(props) {
  const { handleSubmit, register } = useForm();

  function onClickEdit(data) {
    console.log(data);
    props.setIsQuestion((prev) => !prev);
  }
  return (
    <SellerCommentEditUI
      el={props.el}
      onClickEdit={onClickEdit}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
