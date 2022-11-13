import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuBtn,setMenuBtn] = useState(false);

    const handleBtn = () => setMenuBtn(menuBtn => !menuBtn);
    const closeMenu = () => setMenuBtn(false);
    return (
        <section className='header'>
            <NavLink to='/' className='logo' onClick={closeMenu}>SC.</NavLink>

            <nav className={menuBtn ? 'navbar active' : 'navbar'} onClick={closeMenu}>
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/Stock'>In Stock</NavLink>
                <NavLink to='/About'>About Us</NavLink>
                <NavLink to='/Services'>services</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
            </nav>

            <i id='menu-btn' className={menuBtn ? 'fas fa-times' : 'fas fa-bars'} onClick={handleBtn}></i>

        </section>
    )
}

export default NavBar
