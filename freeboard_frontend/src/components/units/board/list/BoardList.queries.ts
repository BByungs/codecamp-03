import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $page: Int
    $search: String
    $endDate: DateTime
    $startDate: DateTime
  ) {
    fetchBoards(
      page: $page
      search: $search
      endDate: $endDate
      startDate: $startDate
    ) {
      _id
      writer
      title
      createdAt
      updatedAt
      contents
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      writer
      likeCount
      createdAt
      _id
      images
    }
  }
`;
