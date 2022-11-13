import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import About from '../../components/Home-About/About';
import Services from '../../components/Home-Services/Services'
import Contact from '../../components/Home-Contact/Contact';
import Media from '../../components/Home-Media/Media';
import text from './text';
import Stext from './Stext';

const Home = () => {
    return (
        <>
            <Carousel/>
            <About data={text}/>
            <Services data={Stext}/>
            <Contact/>
            <Media/>
        </>
    )
}

export default Home