import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, isBestSeller }) => {
    const { currency } = useContext(ShopContext);

    // Conditionally apply the golden frame class to the image container
    const imageFrameClass = isBestSeller ? 'p-1 rounded-xl border-2 border-transparent hover:border-[#d4af37] transition-all' : '';

    return (
        <Link
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col text-gray-700 cursor-pointer"
            to={`/product/${id}`}
        >
            {/* Image Container */}
            <div className={`w-full aspect-[4/5] overflow-hidden ${imageFrameClass}`}>
                <img
                    className="w-full h-full object-contain"
                    src={image[0]}
                    alt={name}
                />
            </div>

            {/* Product Details - pushed to the bottom */}
            <div className="pt-3 pb-1 mt-auto">
                <p className="text-sm font-medium">{name}</p>
                <p className="text-sm">{currency}{price}</p>
            </div>
        </Link>
    );
};

export default ProductItem;