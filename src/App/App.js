import React from 'react';
import Header from '../Components/Header/Header';
import Detail from '../Pages/Detail/Detail';
import Home from '../Pages/Home/Home';
import {IconContext} from 'react-icons'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail/:id" element={<Detail />}/>
 
      </Routes>
     </IconContext.Provider>
     </BrowserRouter>
  );
}

export default App;
