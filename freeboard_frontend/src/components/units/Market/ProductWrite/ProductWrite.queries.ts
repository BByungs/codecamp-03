import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;
