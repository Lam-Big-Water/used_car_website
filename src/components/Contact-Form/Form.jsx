import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <section className='booking thin-section'>
            <h1 className='heading-title'>Get In Touch</h1>

            <form className='book-form'>
                <div className='flex'>
                    <div className='inputBox'>
                        <span>Name:</span>
                        <input type="text" placeholder="enter your name" name="name"/>
                    </div>
                    <div className='inputBox'>
                        <span>Email:</span>
                        <input type="email" placeholder="enter your email" name="email"/>
                    </div>
                    <div className='inputBox'>
                        <span>Phone:</span>
                        <input type="number" placeholder="enter your number" name="phone"/>
                    </div>
                    <div className='inputBox'>
                        <span>Comment:</span>
                        <input type="textarea" placeholder="enter your comment" name="comment"/>
                    </div>
                </div>

                <input type="submit" value='submit' name="btn" className='btn' />
            </form>
        </section>
    )
}

export default Form