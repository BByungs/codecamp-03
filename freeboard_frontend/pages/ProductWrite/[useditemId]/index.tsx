import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import ProductDetailPage from "../../../src/components/units/Market/ProductDetail/ProductDetail.container";

// 디테일 페이지
const ProductDetail = (props) => {
  return <ProductDetailPage />;
};

export default withAuth(ProductDetail);
