mutation {
    createBoard(createBoardInput:{
        writer: "안병진",
      password: "1234",
      title: "헿",
      contents: "헿ㅎㅎ",
      youtubeUrl: "아..",
      boardAddress: {
        zipcode : "asdasd",
        address : "asdasd",
        addressDetail: "asdsadsa"
      },
      images: ["asdasdsadas"]
      
    }) {
      writer
    }
  }