import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';

const ProductList = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div>
            <div className="product-container">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleProductClick(product)}
                    >
                        <img
                            src={`https://media.gettyimages.com/id/1288020286/photo/apple-ipad-air-4-in-sky-blue.jpg?s=1024x1024&w=gi&k=20&c=7pqA8LeHZ6mj6_BgrqKjuj34AEoSnXnwlVUEZJF_Oco=`}
                            alt={product.title}
                            className="product-image"
                        />
                        <h3>{product.title}</h3>
                        <p>{product.body.substring(0, 50)}...</p>
                    </div>
                ))}
            </div>
            {selectedProduct && <Navigate to={`/product/${selectedProduct.id}`} />}
        </div>
    );
};

export default ProductList;
