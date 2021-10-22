import MyFavoriteUI from "./MyFavorite.presenter";

export default function MyFavorite(props) {
  return (
    <MyFavoriteUI
      fetchUseditemsIPicked={props.fetchUseditemsIPicked}
      onClickFavoritePage={props.onClickFavoritePage}
      favoriteStartPage={props.favoriteStartPage}
      pickedLastPage={props.pickedLastPage}
    />
  );
}
