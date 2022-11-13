import React from 'react';
import { Link } from 'react-router-dom';
import './Media.css';

const Media = () => {
    return (
        <section className='home-book'>
            <h3>Subscribe to our emails</h3>
            <div className='book-details'>
                <div className='book'>
                    <Link to='/contact' className='btn'>Book Now</Link>
                </div>

                <div className='media'>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest-p"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </section>
    )
}

export default Media