import MyUsedItemUI from "./MyUsedItem.presenter";

export default function MyUsedItem(props) {
  return (
    <MyUsedItemUI
      fetchUseditemsISold={props.fetchUseditemsISold}
      soldStartPage={props.soldStartPage}
      onClickSoldPage={props.onClickSoldPage}
      soldCurrentPage={props.soldCurrentPage}
      soldLastPage={props.soldLastPage}
    />
  );
}
