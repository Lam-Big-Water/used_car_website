import React from 'react';
import HomeAbout from '../../components/Home-About/About';
import Form from '../../components/Contact-Form/Form';
import text from './text';

const Contact = () => {
    return (
        <>
            <HomeAbout data={text}/>
            <Form/>
        </>
    )
}

export default Contact