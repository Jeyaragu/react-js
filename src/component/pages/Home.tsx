import { useState } from 'react';
import { Routes, Route, } from 'react-router-dom';

import CartTemplate from '../templates/CartTemplate/CartTemplate';
import ContactUsTemplate from '../templates/ContactUsTemplate/ContactUsTemplate';
import ProductsTemplate from '../templates/ProductListTemplate/ProductListTemplate';

export default function Home() {
    const [productData, setProductData] = useState<any[]>([]);
    const handleCartChange = (newProductData: any[]) => {
        setProductData(newProductData);
    }
    return (
        <div>
            <Routes>
                {/* When ever the input changes in child component ProductCard, the updated productData is passed to the parent component Home through the onInputChange prop. The handleCartChange function in Home updates the productData state with the new data received from ProductCard. This allows Home to maintain the current state of the cart items and pass it down to other components like CartTemplate as needed. */}
                <Route path="/" element={<ProductsTemplate onInputChange={handleCartChange} />} />
                <Route path="/products-list" element={<ProductsTemplate onInputChange={handleCartChange} />} />
                <Route path="/cart" element={<CartTemplate productData={productData} />} />
                <Route path="/contact-us" element={<ContactUsTemplate />} />
            </Routes>
        </div>
    )
}