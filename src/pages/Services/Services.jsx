import React from 'react';
import HomeServices from '../../components/Home-Services/Services';
import HomeMedia from '../../components/Home-Media/Media';
import Stext from './Stext';

const Services = () => {
    return (
        <>
            <HomeServices data={Stext}/>
            <HomeMedia/>
        </>
    )
}

export default Services