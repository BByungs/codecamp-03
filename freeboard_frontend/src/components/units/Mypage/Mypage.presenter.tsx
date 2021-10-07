import { withAuth } from "../../commons/hoc/withAuth";
import { Wrapper } from "./Mypage.styles";

const MypageUIPage = () => {
  return <Wrapper></Wrapper>;
};

export default withAuth(MypageUIPage);
