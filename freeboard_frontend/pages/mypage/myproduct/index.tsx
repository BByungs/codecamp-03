import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import MyProduct from "../../../src/components/units/Market/MyPage/MyProduct/MyProduct.container";

const MyProductPage = () => {
  return <MyProduct />;
};

export default withAuth(MyProductPage);
