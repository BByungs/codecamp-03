mutation {
    createUser(createUserInput:{
      email:"asdasdasd",
      password:"1234",
      name:"asdasdas"
    }) {
      _id
      name
      email
    }
  }