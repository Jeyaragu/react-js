// @ts-expect-error CSS imports are handled by the bundler.
import './ProductListTemplate.style.css';
import NavMenu from '../../molecules/NavMenu/NavMenu';
import ProductCard from '../../organisms/ProductCard/ProductCard';

interface ProductListTemplateProps {
    onInputChange?: (newProductData: any[]) => void;
}

const ProductListTemplate = ({ onInputChange }: ProductListTemplateProps) => {
    return (
        <main className="product-list-template">
            <NavMenu />
            <ProductCard onInputChange={onInputChange} />
        </main>
    )
}

export default ProductListTemplate;