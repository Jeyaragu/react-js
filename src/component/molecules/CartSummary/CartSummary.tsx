// @ts-expect-error CSS imports are handled by the bundler.
import './CartSummary.style.css';

type CartSummaryProps = {
    totalAmount: number;
};

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
    return (
        <div className="cart-summary">
            <h2 className="cart-summary-title">Order Summary</h2>
            <div className="cart-summary-row">
                <span>Total</span>
                <span>${totalAmount}</span>
            </div>
            <button className="cart-summary-checkout">Checkout</button>
        </div>
    );
};

export default CartSummary;