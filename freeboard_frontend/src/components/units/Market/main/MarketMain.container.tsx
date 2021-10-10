import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketMainUIPage from "./MarketMain.presenter";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "./MarketMain.queries";

export default function MarketMainPage() {
  const router = useRouter();
  const { data: fetchUseditemsOfTheBest } = useQuery(
    FETCH_USED_ITEMS_OF_THE_BEST
  );

  function onClickSubmit() {
    router.push("/ProductWrite/new");
  }
  return (
    <MarketMainUIPage
      onClickSubmit={onClickSubmit}
      fetchUseditemsOfTheBest={fetchUseditemsOfTheBest}
    />
  );
}
