import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import DetailAskUI from "./DetailAsk.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./DetailAsk.queries";
import { FETCH_USED_ITEM_QUESTIONS } from "../Comment/Comment.queries";
import { useState } from "react";
export default function DetailAsk() {
  const router = useRouter();
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);
  const { handleSubmit, register } = useForm();
  // const [isQuestion, setIsQuestion] = useState(false);
  async function onClickQuestion(data: any) {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: {
              useditemId: router.query.useditemId,
            },
          },
        ],
      });
      // setIsQuestion(true);
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <DetailAskUI
      handleSubmit={handleSubmit}
      register={register}
      onClickQuestion={onClickQuestion}
      // isQuestion={isQuestion}
    />
  );
}
