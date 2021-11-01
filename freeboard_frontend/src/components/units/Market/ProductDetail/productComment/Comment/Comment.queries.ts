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
      user {
        name
      }
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
      user {
        name
        email
      }
      useditemQuestion {
        _id
      }
    }
  }
`;

// fetchUserLoggedIn
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      _id
    }
  }
`;

// updateUseditemQuestionAnswer
export const UPDATE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      _id
    }
  }
`;

// deleteUseditemQuestion
export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

// updateUseditemQuestion
export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
