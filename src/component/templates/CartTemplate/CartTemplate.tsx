// @ts-expect-error CSS imports are handled by the bundler.
import './CartTemplate.style.css';
import NavMenu from "../../molecules/NavMenu/NavMenu";
import CartList from "../../organisms/CartList/CartList";
import CartSummary from "../../molecules/CartSummary/CartSummary";

const CartTemplate = ({ productData }: any) => {
  const totalAmount = productData.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <NavMenu />
      <h1>Cart</h1>
      <div className="cart-template-container">
        <CartList productData={productData} />
        <CartSummary totalAmount={totalAmount} />
      </div>
    </div>
  );
};

export default CartTemplate;