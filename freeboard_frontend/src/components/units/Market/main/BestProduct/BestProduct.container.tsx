import { useRouter } from "next/router";
import BestProductUIPage from "./BestProduct.presenter";

export default function BestProduct(props: any) {
  const router = useRouter();
  // function onClickBestProduct(event) {
  //   router.push(`/ProductWrite/${event.currentTarget.id}`);
  // }

  const onClickBestProduct = (el: any) => () => {
    router.push(`/ProductWrite/${el._id}`);

    const views = JSON.parse(String(localStorage.getItem("todayView"))) || [];
    let isExists = false;

    views.forEach((viewsEl: any) => {
      if (viewsEl._id === el._id) {
        isExists = true;
      }
    });
    if (isExists) {
      return;
    }

    if (views.length > 2) {
      views.shift();
    }

    views.push(el);
    localStorage.setItem("todayView", JSON.stringify(views));
  };

  return (
    <BestProductUIPage
      data={props.data}
      onClickBestProduct={onClickBestProduct}
    />
  );
}
