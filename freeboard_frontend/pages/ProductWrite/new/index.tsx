// 등록 페이지
import { withAuth } from "../../../src/components/commons/hoc/withAuth";
import ProductWritePage from "../../../src/components/units/Market/ProductWrite/ProdcutWrite.container";

const ProductSubmit = () => {
  return <ProductWritePage isEdit={false} />;
};

export default withAuth(ProductSubmit);
