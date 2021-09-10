import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      writer
      title
      contents
      createdAt
      _id
    }
  }
`;
