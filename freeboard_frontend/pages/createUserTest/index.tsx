import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
      createdAt
    }
  }
`;

export default function CreateUserTest() {
  const [createUser] = useMutation(CREATE_USER);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      console.log(result.data.createUser._id, result.data.createUser.email);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      name : <input type="text" onChange={onChangeName} />
      <br />
      email : <input type="text" onChange={onChangeEmail} />
      <br />
      password : <input type="password" onChange={onChangePassword} />
      <br />
      <button onClick={onClickSubmit}>회원가입</button>
    </>
  );
}
