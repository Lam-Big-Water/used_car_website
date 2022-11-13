
import Home from '../pages/Home/Home';
import Stock from '../pages/Stock/Stock';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';
import ItemDetails from '../pages/ItemDetails/ItemDetails';
import {Navigate} from 'react-router-dom';

//eslint-disable-next-line
export default [
    {
        path:'/Home',
        element:<Home/>
    },
    {
        path:'/Stock',
        element:<Stock/>,
        children:[
            {
                path:'ItemDetails',
                element:<ItemDetails/>
            }
        ]
    },
    {
        path:'/About',
        element:<About/>
    },
    {
        path:'/Services',
        element:<Services/>
    },
    {
        path:'/Contact',
        element:<Contact/>
    },
    {
        path:'/',
        element:<Navigate to='/Home'/>
    }
]
