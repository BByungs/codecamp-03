import { gql } from "@apollo/client";

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int, $search: String) {
    fetchPointTransactions(page: $page, search: $search) {
      _id
      impUid
      amount
      status
      statusDetail
      createdAt
      balance
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      createdAt
      impUid
      amount
      balance
      status
      statusDetail
    }
  }
`;

// seller를 넣으면 아예 안됨
export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($search: String, $page: Int) {
    fetchPointTransactionsOfBuying(search: $search, page: $page) {
      _id
      createdAt
      useditem {
        name
        # seller {
        #   name
        # }
      }
      amount
      balance
    }
  }
`;

// balance가 1원은 정상적으로 나오는데 그 이상의 숫자는 2배가 되어서 적용됨
export const FETCH_POINT_TRANSACTIONS_OF_Selling = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      createdAt
      useditem {
        name
      }
      amount
      balance
    }
  }
`;
