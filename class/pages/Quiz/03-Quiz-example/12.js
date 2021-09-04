mutation {
    createProduct(seller:"안병진",createProductInput:{
      name: "에어팟",
      detail: "중고",
      price: 10000000
    }) {
      message
      _id
    }
  }