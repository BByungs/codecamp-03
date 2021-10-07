import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "@emotion/styled";
interface IProps {
  isValid: boolean;
}
const MyButton = styled.button`
  background-color: ${(props: IProps) => (props.isValid ? "yellow" : "")};
`;

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일을 형식이 적합하지 않습니다.")
    .required("반드시 입력해야 하는 필수 사항입니다."),
  // email형식에 맞지 않으면 나올 에러메시지 , 입력하지 않을때 나올 메시지
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("비밀번호는 반드시 입력해주세요!"),
});

// 위에 있는 검증을 언제 할 것인가

export default function ReactHookFormYupIsValid() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // 검증을 언제 할 것인가? onChange될떼
  });
  // formState에 에러 관련한것들이 들어있음

  function onClickLogin(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      {/* ######################################### */}
      <div>리액트 훅 폼 연습!!</div>
      이메일: <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      {/* 에러가 있을수도 있고, 없을수도 있으니까 옵셔널 체이닝 */}
      비밀번호: <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      {/* 에러가 있을수도 있고, 없을수도 있으니까 옵셔널 체이닝 */}
      {/* ######################################### */}
      <MyButton type="submit" isValid={formState.isValid}>
        로그인하기
      </MyButton>
    </form>
  );
}

// formState에 있는 isValid 속성으로
// 유효성 검사를 해서 boolean값을 받아와서
// 버튼의 배경을 검증이 완료되면 노란색으로 바꿨음
