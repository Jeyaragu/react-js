// @ts-expect-error CSS imports are handled by the bundler.
import './ProductCard.style.css'
import { useState, useEffect } from 'react';

import Image from '../../atoms/Image/Image';
import Heading from '../../atoms/Heading/Heading';
import ProductMeta from '../../molecules/ProductMeta/ProductMeta';
import ItemManager from '../../molecules/ItemManager/ItemManager';

import { getProductInfo } from './ProductCardService';

const ProductCard = ({ onInputChange }: any) => {
    const [productData, setProductData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<any[]>([]);

    useEffect(() => {
        getProductInfo().then(data => {
            setProductData(data);
        }).catch(error => {
            setError(error.errorMessage || 'An unknown error occurred.');
        });
    }, []);

    const handleCartUpdate = (product: any, action: string) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        const currentQuantity = existingItem?.quantity || 0;

        // If item doesn't exist in card and action is add adding to array.
        if (!existingItem) {
            if (action === 'add') {
                const updatedList = [...cartItems, { ...product, quantity: 1 }];
                setCartItems(updatedList);
                onInputChange?.(updatedList);
            }
            return;
        }
        // If action is subtract and quantity is 1 removing from cardItems
        if (action === 'subtract' && currentQuantity <= 1) {
            const filteredList = cartItems.filter(item => item.id !== product.id);
            setCartItems(filteredList);
            onInputChange?.(filteredList);
            return;
        }
        // It is either add or subtract and item exists in cartItems updating the quantity.
        const newQuantity = action === 'add' ? currentQuantity + 1 : currentQuantity - 1;
        const updatedQuantityList = cartItems.map(item =>
            item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedQuantityList);
        onInputChange?.(updatedQuantityList);
    };
    return (
        <div className="product-card">
            {error && <p>{error}</p>}
            {productData.length > 0 ? (
                productData.map(product => (
                    <section key={product.id} className="product-card-item">
                        <Image
                            src={product.image}
                            alt={product.title}
                            className="product-card-image" />
                        <Heading title={product.title} level={2} />
                        <ProductMeta
                            price={product.price}
                            quantity={product.rating.count} />
                        <ItemManager
                            count={cartItems.find(item => item.id === product.id)?.quantity || 0}
                            onCountChange={(action: string) => handleCartUpdate(product, action)}
                        />
                    </section>
                ))
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductCard;