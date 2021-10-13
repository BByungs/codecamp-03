import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      createdAt
      seller {
        _id
        email
        name
        picture
      }
    }
  }
`;
