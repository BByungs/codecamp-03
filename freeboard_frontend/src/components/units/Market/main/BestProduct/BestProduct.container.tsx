import { useRouter } from "next/router";
import BestProductUIPage from "./BestProduct.presenter";

export default function BestProduct(props) {
  const router = useRouter();
  function onClickBestProduct(event) {
    router.push(`/ProductWrite/${event.currentTarget.id}`);
  }
  return (
    <BestProductUIPage
      fetchUseditemsOfTheBest={props.fetchUseditemsOfTheBest}
      onClickBestProduct={onClickBestProduct}
    />
  );
}
