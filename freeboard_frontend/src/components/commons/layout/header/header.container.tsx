import HeaderUI from "./header.presenter";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  function onClickLogo() {
    router.push("/boards");
  }
  return <HeaderUI onClickLogo={onClickLogo} />;
}
