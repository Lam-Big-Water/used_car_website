import React from 'react';
import './About.css';
const About = ({data,pic}) => {
    return (
        <>
            <section className='home-about'>
                <div className='image'>
                    <img src={data.picture} alt="Our Mission" />
                </div>

                <div className='content'>
                    <h3>{data.title}</h3>
                    <p>{data.text1}</p>
                    <p>
                    {data.text2}
                    </p>
                    <p>
                    {data.text3}
                    </p>
                </div>
            </section>
        </>
    )
}

export default About