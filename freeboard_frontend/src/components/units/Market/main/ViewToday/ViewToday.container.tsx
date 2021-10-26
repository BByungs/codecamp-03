import { useRouter } from "next/router";
import ViewTodayUI from "./ViewToday.presenter";

export default function ViewToday(props: any) {
  const router = useRouter();
  const onClickVT = (el: any) => () => {
    // console.log(el);
    router.push(`/ProductWrite/${el._id}`);
  };
  return (
    <ViewTodayUI todayViewItems={props.todayViewItems} onClickVT={onClickVT} />
  );
}
