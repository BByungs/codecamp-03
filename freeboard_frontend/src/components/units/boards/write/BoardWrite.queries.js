import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $updateBoardInput: UpdateBoardInput!
    $password: String
    $boardId: ID!
  ) {
    updateBoard(
      updateBoardInput: $updateBoardInput
      password: $password
      boardId: $boardId
    ) {
      _id
    }
  }
`;

// 백엔드에서 정보를 가져올때 필요한 정보들을 여기다 적고

// 필요한값은 컨테이너에서 적어주면 됨

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
      createdAt
      likeCount
      dislikeCount
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;
