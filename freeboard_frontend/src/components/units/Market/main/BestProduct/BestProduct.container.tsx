import { useRouter } from "next/router";
import BestProductUIPage from "./BestProduct.presenter";

export default function BestProduct(props) {
  const router = useRouter();
  // function onClickBestProduct(event) {
  //   router.push(`/ProductWrite/${event.currentTarget.id}`);
  // }

  const onClickBestProduct = (el) => () => {
    router.push(`/ProductWrite/${el._id}`);

    const views = JSON.parse(localStorage.getItem("todayView")) || [];

    let isExists = false;
    views.forEach((viewsEl) => {
      if (viewsEl._id === el._id) {
        isExists = true;
      }
    });
    if (isExists) {
      return;
    }

    if (views.length > 3) {
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
