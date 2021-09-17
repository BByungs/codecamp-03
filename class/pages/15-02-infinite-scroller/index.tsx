import InfiniteScroll from "react-infinite-scroller";
import { gql, useQuery } from "@apollo/client";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function InfiniteScrollerPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);
  // fetchMore는 더 받아오는 기능임
  function onLoadMore() {
    if (!data) {
      return;
    }
    fetchMore({
      variables: { page: Math.ceil(data?.fetchBoards.length / 10) + 1 },
      // fetchMore에는 또 updateQuery라는게 있음
      // fetchMore를 하게 되면 2페이지로 쿼리가 추가로 또 요청이 들어감
      // 그러면 updateQuery에서
      updateQuery: (prev, { fetchMoreResult }) => {
        // 전에 있던걸 합쳐서 내보내는거임 prev, {fetchMoreResult} 부분
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
          // 전에있던거 + 추가된거
          // 그래서 스크롤을 내리면 함수가 작동해서 추가로 더 보여지는거임
          // 위에있는 page는 하드코딩 하는게 아니라 받아온 fetchBoards의 배열의 전체길이에 +1하면 됨
        };
      },
    });
  }

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {/* {items} // <-- This is the content you want to load */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
        </div>
      ))}
    </InfiniteScroll>
  );
}

// hasMore가 false이면 더이상 작동하지 않음
// hasMore={true || false 를 hasMore를 true로 일단 통신이 가능하게끔 바꿔줌

// 불러왔을때 실행해야할 함수는 loadMore에 넣어주자
