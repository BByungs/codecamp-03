import { withAuth } from "../../src/components/commons/hoc/withAuth";
import MyPageMain from "../../src/components/units/Market/MyPage/MyPageMain/MyPageMain.container";

// 내 프로필이 메인임
const MyPage = () => {
  return <MyPageMain />;
};

export default withAuth(MyPage);
