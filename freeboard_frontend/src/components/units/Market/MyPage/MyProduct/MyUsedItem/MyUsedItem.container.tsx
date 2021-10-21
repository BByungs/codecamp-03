import MyUsedItemUI from "./MyUsedItem.presenter";

export default function MyUsedItem(props) {
  return <MyUsedItemUI fetchUseditemsISold={props.fetchUseditemsISold} />;
}
