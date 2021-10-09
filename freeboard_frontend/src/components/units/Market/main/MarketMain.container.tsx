import { useRouter } from "next/router";
import MarketMainUIPage from "./MarketMain.presenter";
export default function MarketMainPage() {
  const router = useRouter();

  function onClickSubmit() {
    router.push("/ProductWrite/new");
  }
  return <MarketMainUIPage onClickSubmit={onClickSubmit} />;
}
