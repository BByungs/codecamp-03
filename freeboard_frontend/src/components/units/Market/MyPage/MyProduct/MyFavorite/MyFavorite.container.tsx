import MyFavoriteUI from "./MyFavorite.presenter";

export default function MyFavorite(props) {
  return <MyFavoriteUI fetchUseditemsIPicked={props.fetchUseditemsIPicked} />;
}
