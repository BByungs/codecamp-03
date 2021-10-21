import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import MyPoint from "../../../src/components/units/Market/MyPage/MyPoint/MyPoint.container";

const MyPointPage = () => {
  return <MyPoint />;
};

export default withAuth(MyPointPage);
