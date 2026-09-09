// @ts-expect-error CSS imports are handled by the bundler.
import './CartList.style.css';
import CartItem from "../../molecules/CartItem/CartItem";

type CartListProps = {
    productData: any[];
};

const CartList = ({ productData }: CartListProps) => {
    return (
        <div className="cart-list">
            {productData.length > 0 ? (
                productData.map((item) => (
                    <CartItem
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.price * item.quantity}
                    />
                ))
            ) : (
                <p className="cart-empty-message">Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartList;