import MyPageMainUI from "./MyPageMain.presenter";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";

// resetUserPassword
const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export default function MyPageMain() {
  const { handleSubmit, register, formState } = useForm();
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD);

  async function onClickResetPassword(data) {
    // console.log(data);
    try {
      await resetUserPassword({
        variables: {
          password: data.newPasswordCheck,
        },
      });
      alert("비밀번호가 변경 되었습니다!");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <MyPageMainUI
      handleSubmit={handleSubmit}
      register={register}
      onClickResetPassword={onClickResetPassword}
    />
  );
}
