import React from 'react';
import {IconContext} from 'react-icons'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalContext from './AppContext';


// Components
import Header from '../Components/Header/Header';
import Detail from '../Pages/Detail/Detail';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <GlobalContext>
      <BrowserRouter>
        <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
        <ScrollToTop/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
  
        </Routes>
        <Footer/>
      </IconContext.Provider>
      </BrowserRouter>
     </GlobalContext>
  );
}

export default App;
