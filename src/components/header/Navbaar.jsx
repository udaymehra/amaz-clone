import React from 'react';
import { Link } from 'react-router-dom'; // Add the correct import statement
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import "./Navbaar.css";

const Navbaar = () => {
    const ProductFilter = ({ products }) => {
        const [searchTerm, setSearchTerm] = useState('');
      
        const handleSearch = (e) => {
          setSearchTerm(e.target.value);
        };
      
        const filteredProducts = products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}

    return (
        <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        {/* <ul> */}
                       <Link to="/Home"> <img src="./src/assets/logo.png" alt="dfad" /></Link>

                    </div>
                    <nav className='gap-bw-searchbar&a'>
                        <ul>
                            <li><Link to="/Shop">Shop</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="nav_searchbaar">
                        <input type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch} />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className="nav-right">
                    <Link to="/Account">My Account</Link>
                    <Link to="/SignUp">SignUp</Link>
                    <Link to="/cart">Cart</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbaar;
