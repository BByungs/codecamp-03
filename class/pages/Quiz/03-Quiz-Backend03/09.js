mutation {
    createBoardComment(
      boardId:"612f6bc5abd89b00293addf2",
      createBoardCommentInput:{
      contents:"ㅇㅇㅇ3",
      writer: "ㅁㄴㅇㄴㅁ3",
      password: "1234",
      rating: 5
    }) {
      _id
    }
  }
  
//   이거 3번하면됨
  
  // 확인
  query {
    fetchBoardComments(boardId:"612f6bc5abd89b00293addf2") {
      contents
    }
  }