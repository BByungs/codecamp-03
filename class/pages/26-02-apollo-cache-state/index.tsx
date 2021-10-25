import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $search: String) {
    fetchBoards(page: $page, search: $search) {
      writer
      title
      contents
      _id
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`; // :ID!

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      title
      contents
      writer
    }
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickDelete = (boardId) => async () => {
    // const result = await deleteBoard({
    //   variables: {
    //     boardId: boardId,
    //   },

    await deleteBoard({
      variables: {
        boardId, // boardId: boardId(el._id)
      },
      // 삭제 api가 요청이 나감
      // 그리고나서 리패치쿼리를 했는데,
      // fachboards가 10가 요청이 되었는데
      // (추가적인 쿼리를 안날리고 바로 삭제하는거)
      // 수정한 부분만 바뀌게 하는거임
      update(cache, { data }) {
        // 위에있는 variables가지고 먼저 요청이 되고
        // 끝나면 update실행
        // cache , {data}
        // cache: cache state관련된 기능 제공
        // 캐쉬를 업데이트할건지 캐쉬스테이트에서 꺼내올건지 , 캐쉬스테이트에 집어넣을건지
        // 위에 variables에서 요청하면 응답이 올건데
        // deleteBoard를 하면 ID가 온다. 이 결과 데이터가 result로 오고
        // 그럼 그 result가 data로 들어옴
        // cache를 수정할지 읽을지 를 가지고있는 도구

        // * data가 받은 id
        const deletedId = data.deleteBoard;
        cache.modify({
          // cache를 수정한다

          // * 기존에 요청했던것들
          fields: {
            // 어떤 캐쉬에 어떤 필드를 수정할거냐
            // 어떤걸 수정할거냐
            fetchBoards: (prev, { readField }) => {
              // prev : 기존의 10개
              const newFetchBoards = prev.filter((board) => {
                // board._id
                // * 실제 캐쉬엔 이렇게 들어 있지 않음
                // * {readField}를 통해서 아이디를 뽑아 올 수 있음
                return readField("_id", board) !== deletedId;
              });

              // fetchBoards에 원래 10개가 있었는데
              // 하나를 없애줘 =>
              // 1. 기존의 fetchBoards 10개에서 지금 삭제된 Id를 제외한 9개를 만들고
              // 2. 그렇게 만드어진 9개의 새로운 fetchBoard를 return하여 덮어씌우기
              return [...newFetchBoards];
              // ! 결과적으로 10개에서 하나를 삭제했으면
              // ! 원래는 리패치쿼리를 통해서 api요청을 여러번 날려야 하는데
              // ! 이렇게 하면 불 필요한 쿼리를 요청할 필요가 없다. 효율적임
            },
          },
        });
      },
    });
  };

  // ! 이 부분 수정 아님
  const onClickCreate = async () => {
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "콘스탄틴",
          password: "1234",
          title: "배고파",
          contents: "ㅠㅠ",
        },
      },
      update(cache, { data }) {
        // cache를 수정한다
        cache.modify({
          fields: {
            fetchBoards: (prev, _) => {
              // 추가된 createBoard 결과물과 이전의 10개를 합쳐서 11개를 돌려주기

              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contenst}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickCreate}>등록하기</button>
    </>
  );
}

//! #########################

// import { gql, useMutation, useQuery } from "@apollo/client";

// const FETCH_BOARDS = gql`
//   query fetchBoards($page: Int, $search: String) {
//     fetchBoards(page: $page, search: $search) {
//       writer
//       title
//       contents
//       _id
//     }
//   }
// `;

// const DELETE_BOARD = gql`
//   mutation deleteBoard($boardId: ID!) {
//     deleteBoard(boardId: $boardId)
//   }
// `; // :ID!

// const CREATE_BOARD = gql`
//   mutation createBoard($createBoardInput: CreateBoardInput!) {
//     createBoard(createBoardInput: $createBoardInput) {
//       _id
//       title
//       contents
//       writer
//     }
//   }
// `;

// export default function ApolloCacheStatePage() {
//   const { data } = useQuery(FETCH_BOARDS);
//   const [deleteBoard] = useMutation(DELETE_BOARD);
//   const [createBoard] = useMutation(CREATE_BOARD);

//   const onClickDelete = (boardId) => async () => {
//     // const result = await deleteBoard({
//     //   variables: {
//     //     boardId: boardId,
//     //   },

//     await deleteBoard({
//       variables: {
//         boardId, // boardId: boardId(el._id)
//       },
//       // 삭제 api가 요청이 나감
//       // 그리고나서 리패치쿼리를 했는데,
//       // fachboards가 10가 요청이 되었는데
//       // (추가적인 쿼리를 안날리고 바로 삭제하는거)
//       // 수정한 부분만 바뀌게 하는거임
//       update(cache, { data }) {
//         // 위에있는 variables가지고 먼저 요청이 되고
//         // 끝나면 update실행
//         // cache , {data}
//         // cache: cache state관련된 기능 제공
//         // 캐쉬를 업데이트할건지 캐쉬스테이트에서 꺼내올건지 , 캐쉬스테이트에 집어넣을건지
//         // 위에 variables에서 요청하면 응답이 올건데
//         // deleteBoard를 하면 ID가 온다. 이 결과 데이터가 result로 오고
//         // 그럼 그 result가 data로 들어옴
//         // cache를 수정할지 읽을지 를 가지고있는 도구

//         // * data가 받은 id
//         const deletedId = data.deleteBoard;
//         cache.modify({
//           // cache를 수정한다

//           // * 기존에 요청했던것들
//           fields: {
//             // 어떤 캐쉬에 어떤 필드를 수정할거냐
//             // 어떤걸 수정할거냐
//             fetchBoards: (prev, { readField }) => {
//               // prev : 기존의 10개
//               const newFetchBoards = prev.filter((board) => {
//                 // board._id
//                 // * 실제 캐쉬엔 이렇게 들어 있지 않음
//                 // * {readField}를 통해서 아이디를 뽑아 올 수 있음
//                 return readField("_id", board) !== deletedId;
//               });

//               // fetchBoards에 원래 10개가 있었는데
//               // 하나를 없애줘 =>
//               // 1. 기존의 fetchBoards 10개에서 지금 삭제된 Id를 제외한 9개를 만들고
//               // 2. 그렇게 만드어진 9개의 새로운 fetchBoard를 return하여 덮어씌우기
//               return [...newFetchBoards];
//               // ! 결과적으로 10개에서 하나를 삭제했으면
//               // ! 원래는 리패치쿼리를 통해서 api요청을 여러번 날려야 하는데
//               // ! 이렇게 하면 불 필요한 쿼리를 요청할 필요가 없다. 효율적임
//             },
//           },
//         });
//       },
//     });
//   };

//   const onClickCreate = async() => {
//     await createBoard({
//       variables: {
//         createBoardInput: {
//           writer: "ㅎㅇ요",
//           password: "asdzxc",
//           title: "ㅎㅇㅎㅇ",
//           contents: "ㅎㅇㅎㅇㅎㅇㅎㅇ",
//         },
//         update(cache, { data }) {
//           // cache 수정
//           cache.modify({
//             fields: {
//               // fetchBoards를 수정
//               fetchBoards: (prev) => {
//                 // 새로 추가된 createBoard 결과물과
//                 // 이전의 10개를 합쳐서 11개를 돌려주기

//                 // 새로 만든 board + 기존의 fetchBoards10개
//                 return [data.createBoard, ...prev];
//               },
//             },
//           });
//         },
//       },
//     });
//   };

//   return (
//     <>
//       {data?.fetchBoards.map((el) => (
//         <div key={el._id}>
//           <span>{el.writer}</span>
//           <span>{el.title}</span>
//           <span>{el.contenst}</span>
//           <button onClick={onClickDelete(el._id)}>삭제하기</button>
//         </div>
//       ))}
//       <button onClick={onClickCreate}>등록하기</button>
//     </>
//   );
// }
