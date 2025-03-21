import ShippingForm from "./Form/ShippingForm";

const { useCallback } = require("react");

const ProductPage = ({ productId, referrer, theme }) => {
  const handleSubmit = useCallback(
    (orderDetails) => {
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );
  return (
    <>
      <div className={theme}>
        <ShippingForm onSubmit={handleSubmit} />
      </div>
    </>
  );
};
export default ProductPage;
function post(url, data) {
  console.log("POST /" + url);
  console.log(data);
}
