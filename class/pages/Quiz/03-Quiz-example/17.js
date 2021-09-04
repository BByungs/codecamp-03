query {
    fetchBoards(page:2) {
      number
      writer
      title
        contents
      like
      createdAt
    }
  }