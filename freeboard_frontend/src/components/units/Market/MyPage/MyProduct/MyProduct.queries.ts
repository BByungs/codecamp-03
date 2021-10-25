import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      createdAt
      soldAt
    }
  }
`;

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      seller {
        name
      }
      soldAt
      createdAt
    }
  }
`;

// fetchUseditemsCountISold
export const FETCH_USED_ITEMS_COUNT_I_SOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

// fetchUseditemsCountIPicked

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;

// fetchUseditemsCountIBought
export const FETCH_USED_ITEMS_COUNT_I_BOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;
