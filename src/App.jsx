import React,{Fragment} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from './routes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  const element = useRoutes(routes)
  return (
    <Fragment>
      <NavBar/>
        {element}
      <Footer/>
    </Fragment>
  )
}

export default App
