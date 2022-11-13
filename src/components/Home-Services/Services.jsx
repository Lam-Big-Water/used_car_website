import React from 'react';
import './Services.css';

const Services = ({data}) => {
    return (
        <section className='home-packages'>
            <h1 className='heading-title'>Our services</h1>
            <div className='box-container'>
                {
                    data.map((item) => {
                        return(
                            <div className='box' key={item.id}>
                                <div className='image'>
                                    <img src={item.picture} alt={item.title} />
                                </div>
                                <div className='content'>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services