import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentListUI(props: any) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchBoardComments.map((el: any) => (
          <BoardCommentListUIItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
