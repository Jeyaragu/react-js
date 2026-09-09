// @ts-expect-error CSS imports are handled by the bundler.
import './CartItem.style.css';

type CartItemProps = {
    image: string;
    name: string;
    price: number;
    quantity: number;
    totalPrice: number;
};

const CartItem = ({ image, name, price, quantity, totalPrice }: CartItemProps) => {
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={image} alt={name} />
            <span className="cart-item-name">{name}</span>
            <span className="cart-item-price">${price}</span>
            <span className="cart-item-qty">Qty: {quantity}</span>
            <span className="cart-item-total">${totalPrice}</span>
        </div>
    );
};

export default CartItem;