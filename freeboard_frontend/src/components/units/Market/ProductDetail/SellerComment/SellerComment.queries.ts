import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      createdAt
      user {
        _id
        email
        name
      }
    }
  }
`;

export const CREATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
    }
  }
`;

// fetchUseditemQuestionAnswers

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      createdAt
    }
  }
`;

// // createUseditemQuestion
// export const CREATE_USED_ITEM_QUESTION = gql`
//   mutaion createUseditemQuestion($createUseditemQuestionInput:CreateUseditemQuestionInput! , $useditemId:ID!) {
//     createUseditemQuestion(createUseditemQuestionInput:$createUseditemQuestionInput, useditemId:$useditemId) {
//       _id
//       contents
//     }
//   }
// `;
