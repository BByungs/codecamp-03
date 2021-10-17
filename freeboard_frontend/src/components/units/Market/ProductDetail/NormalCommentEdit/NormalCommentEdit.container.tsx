import { useForm } from "react-hook-form";
import NormalCommentEditUI from "./NormalCommentEdit.presenter";

export default function NormalCommentEdit(props) {
  const { handleSubmit, register } = useForm();

  function onClickEdit(data) {
    console.log(data);
    props.setIsEdit((prev) => !prev);
  }
  return (
    <NormalCommentEditUI
      normalEl={props.normalEl}
      onClickEdit={onClickEdit}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
}
