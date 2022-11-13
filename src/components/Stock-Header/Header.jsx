import React,{useState} from 'react';
import './Header.css';

const Header = () => {
    const [menuToggle,setMenuToggle] = useState(false);

    const handleToggle = () => setMenuToggle(menuToggle => !menuToggle);
    const closeMenu = () => setMenuToggle(false);
    return (
        <section className='stock'>
            <h2>Stock</h2>
            <div className='facets-container'>
                <div className='facets-btn fas fa-bars' onClick={handleToggle}>Filter And Sort</div>
                <div className='product-count'>145 Products</div>
            </div>

            <div className='menu'>
                <div className={menuToggle ? 'mark-bg' : 'mark-bg-off'} onClick={closeMenu}></div>
                <nav className={menuToggle ? 'filterBar filter-active' : 'filterBar'}>
                    <div className='barTitle'>
                        <h3>Filter And Sort</h3>
                        <p>150 Product</p>
                    </div>
                    <div className="barList">
                        <span>Availability</span>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="barList">
                        <span>Price</span>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="barList">
                        <span>Brand</span>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="barList">
                        <span>Sort by</span>
                        <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className='filter-btn fas fa-times' onClick={closeMenu}></div>
                    <div className='confirm'>
                        <span className='btn'>Clear All</span>
                        <span className='btn'>Apply</span>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header