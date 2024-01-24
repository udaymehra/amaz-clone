// Home.js or Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="carousel">
                {/* Carousel content goes here */}
                <div className="carousel-item">
                    <img src="image1.jpg" alt="Product 1" />
                    <div className="carousel-caption">
                        <h3>Featured Product 1</h3>
                        <p>Discover the latest trends</p>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="image2.jpg" alt="Product 2" />
                    <div className="carousel-caption">
                        <h3>Featured Product 2</h3>
                        <p>Shop now for great deals</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Home;
