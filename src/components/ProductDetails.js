import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Replace this with your API endpoint for a specific product
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <div className="product-details">
            {product ? (
                <>
                    <img
                        src={`https://media.gettyimages.com/id/1288020286/photo/apple-ipad-air-4-in-sky-blue.jpg?s=1024x1024&w=gi&k=20&c=7pqA8LeHZ6mj6_BgrqKjuj34AEoSnXnwlVUEZJF_Oco=`}
                        alt={product.title}
                        className="product-image"
                    />
                    <h2>{product.title}</h2>
                    <p>{product.body}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
export default ProductDetails;
