mutation {
    updateBoardComment(updateBoardCommentInput:{
      contents: "헿2 수정",
      rating: 5
    },password:"1234",boardCommentId:"612f7069abd89b00293addf8") {
      _id
      contents
    }
  }