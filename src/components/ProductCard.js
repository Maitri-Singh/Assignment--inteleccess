import React from 'react';

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="product-card" onClick={() => onClick(product)}>
            <img
                src={`https://media.gettyimages.com/id/1288020286/photo/apple-ipad-air-4-in-sky-blue.jpg?s=1024x1024&w=gi&k=20&c=7pqA8LeHZ6mj6_BgrqKjuj34AEoSnXnwlVUEZJF_Oco=`}
                alt={product.title}
                className="product-image"
            />
            <h3>{product.title}</h3>
            <p>{product.body.substring(0, 50)}...</p>
        </div>
    );
};

export default ProductCard;
