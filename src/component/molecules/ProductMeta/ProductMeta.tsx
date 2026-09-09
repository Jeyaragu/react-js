// @ts-expect-error CSS imports are handled by the bundler.
import './ProductMeta.style.css';

import Heading from '../../atoms/Heading/Heading';

const ProductMeta = ({ price, quantity }: any) => {
    return (
        <div className="product-meta">
            <Heading title={`Price: ${price}`} level={3} />
            <Heading title={`Quantity: ${quantity}`} level={3} />
        </div>
    )
}

export default ProductMeta;