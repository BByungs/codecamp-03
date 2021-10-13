import { gql } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      pickedCount
      createdAt
      images
      seller {
        _id
        email
        name
      }
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;
