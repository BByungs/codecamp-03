import { gql, useMutation, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const [likeBoard] = useMutation(LIKE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: "61665c43b55052002a93beb2",
    },
  });

  const onClickLikeButton = () => {
    likeBoard({
      variables: {
        boardId: "61665c43b55052002a93beb2",
      },
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: {
      //         boardId: "61665c43b55052002a93beb2",
      //       },
      //     },
      //   ], // 리패치 될 때 까지 기다려야함 => 느림
      optimisticResponse: {
        // 응답을 낙관적으로 받는다 ㅋㅋ
        // 실제 결과가 어떻든 일단 실행하고
        // 후에 실패를 하면 다시 원상복귀
        likeBoard: data?.fetchBoard.likeCount + 1, // => 가짜데이터라서 99%의 확률로 성공할수 있는걸 optimistic ui를 쓰면 됨
      },
      // 지금있는 데이터에 1을 더한값을 가짜로 받는다
      // 데이터가 아폴로 캐쉬에 글로벌하게 저장되는데
      // 이 데이터를 강제로 저장시켜줘야함
      // 그래서 update를 씀
      update(cache, { data }) {
        cache.writeQuery({
          // 직접 고쳐준다.
          query: FETCH_BOARD,
          variables: {
            boardId: "61665c43b55052002a93beb2",
          },
          data: {
            // fetchBoard라는 key에 data가 저장되는데
            fetchBoard: {
              // 기존의 fetchBoard의 likeCount를 강제로 내가 정한값으로 바꿔주는거임
              likeCount: data.likeBoard,
              // 밑에 2개를 꼭 입력해줘야 먹힘
              _id: "61665c43b55052002a93beb2",
              __typename: "Board",
            },
          },
        });
      },
    });
  };

  return (
    <>
      <div>좋아요 갯수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLikeButton}>좋아요 올리기!!</button>
    </>
  );
}
