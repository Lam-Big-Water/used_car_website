import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({src,year,miles,brand,dsc,price,label,path}) => {
    return (
        <div className='item'>
            <Link className='item-link' to={path}>
                <div className='item-label' data-category={label}>
                    <img src={src} alt="car" className='item-img'/>
                </div>
                <div className='item-info'>
                    <h1>{year}<span>{miles}</span></h1>
                    <p>{brand}</p>
                    <h3>{dsc}</h3>
                    <h2>{price}</h2>
                </div>
            </Link>
        </div>
    )
}

export default Item