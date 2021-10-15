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
    await deleteBoard({
      variables: {
        boardId,
      },
      update(cache, { data }) {
        // 언제 실행되나? 요청이 끝나면 update실행
        // cache = cache state관련된 기능
        // data = 요청한 결과(여기선 ID!)
        const deletedId = data.deleteBoard;
        cache.modify({
          // cache를 수정한다

          fields: {
            // 어떤 캐쉬에 어떤 필드를 수정할거냐
            fetchBoards: (prev, { readField }) => {
              // prev는 기존의 10개임 , readField는 어떤 필드를 뽑아올지

              // 1. 기존의 fetchBoards 10개에서 , 지금 삭제된 ID를 제외한 9개를 만들고
              // 2. 그렇게 만들어진 9개의 새로운 fetchBoards를 리턴하여, 덮어씌우기
              const newFetchBoards = prev.filter(
                (el) => readField("_id", el) !== deletedId
              ); // el에서 뽑힌 _id
              return [...newFetchBoards];
            },
          },
        });
      },
    });
  };

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
