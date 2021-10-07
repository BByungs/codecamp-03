import MyFormUI from "./MyForm.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./MyForm.validation";
export default function MyForm() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  function onClickLogin(data) {
    console.log(data);
  }
  return (
    <MyFormUI
      handleSubmit={handleSubmit}
      onClickLogin={onClickLogin}
      register={register}
      formState={formState}
    />
  );
}
