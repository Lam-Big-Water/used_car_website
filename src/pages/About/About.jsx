import React from 'react';
import HomeAbout from '../../components/Home-About/About';
import HomeMedia from '../../components/Home-Media/Media';
import text from './text';


const About = () => {

    return (
        <>
            <HomeAbout data={text}/>
            <HomeMedia/>
        </>
    )
}

export default About