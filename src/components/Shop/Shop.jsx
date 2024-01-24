// Shop.js
import React, { useState, useEffect } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // const apiKey = 'your_api_key';
    const baseUrl = 'https://fakestoreapi.com/products';
    // const productsEndpoint = '/products';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products`, {
                    // headers: {
                    //     Authorization: `Bearer ${apiKey}`,
                    //     // Add other headers if needed
                    // },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error.message);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Shop</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
