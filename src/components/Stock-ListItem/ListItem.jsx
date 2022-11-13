import React from 'react';
import Item from './Item/Item';
import './ListItem.css';
import text from './Item/text';



const ListItem = () => {
    return (
        <section className='list-item'>
                {/* <Item
                src = 'images/item.jpg'
                text = '2014 Mercedes-Benz'
                label = 'New'
                path = '/stock/itemDetails'
                />
                <Item
                src = 'images/item7.jpg'
                text = '2014 Mercedes-Benz'
                label = 'New'
                path = '/stock/itemDetails'
                />
                <Item
                src = 'images/item3.jpg'
                text = '2014 Mercedes-Benz'
                label = 'New'
                path = '/stock/itemDetails'
                />
                <Item
                src = 'images/item4.jpg'
                text = '2014 Mercedes-Benz'
                label = 'New'
                path = '/stock/itemDetails'
                />
                <Item
                src = 'images/item5.jpg'
                text = '2014 Mercedes-Benz'
                label = 'New'
                path = '/stock/itemDetails'
                />
                <Item
                src = 'images/item6.jpg'
                text = '2014 Mercedes-Benz'
                label = 'New'
                path = '/stock/itemDetails'
                /> */}
                {
                    text.map((item) => {
                        return (
                            <Item 
                            key={item.id}
                            src={item.src}
                            year={item.year}
                            miles={item.miles}
                            brand={item.brand}
                            label={item.label}
                            dsc={item.dsc}
                            price={item.price}
                            path={item.path}
                            />
                        )
                    })
                }
        </section>
    )
}

export default ListItem