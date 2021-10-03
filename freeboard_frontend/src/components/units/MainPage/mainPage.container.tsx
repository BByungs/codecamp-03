import MainPageUI from "./mainPage.presenter";
import { useRouter } from "next/router";
export default function MainPage() {
  const router = useRouter();
  function onClickSubmit() {
    router.push("/signin");
  }

  return (
    <>
      <MainPageUI onClickSubmit={onClickSubmit} />
    </>
  );
}
