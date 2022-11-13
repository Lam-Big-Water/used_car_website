import React from 'react';
import pic from './contact.jfif';
import './Contact.css';

const Contact = () => {
    return (
        <section className='home-contact'>
            <div className='image'>
                <img src={pic} alt="show room" />
            </div>

            <div className='content'>
                <h3>Our Showroom</h3>
                <p>
                    Address: 505, 5/F, DCH Building, 20 Kai Cheung Road, Kowloon Bay, HongKong.
                </p>
                <p>
                    Open Hours: 11a.m - 6:00p.m. (Mon - Sun)
                </p>
                <p>
                    Tel: +852 6609 9955
                </p>
                <a href="https://goo.gl/maps/zyi5K5tCCKvnLchVA" className="btn">Direction</a>
            </div>
        </section>
    )
}

export default Contact