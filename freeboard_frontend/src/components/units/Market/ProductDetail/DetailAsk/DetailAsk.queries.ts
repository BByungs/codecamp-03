import { gql } from "@apollo/client";

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      #   useditem {
      #     _id
      #     name
      #     remarks
      #     contents
      #     price
      #     tags
      #     images
      #   }
      user {
        _id
        email
        name
        picture
      }
      createdAt
    }
  }
`;
