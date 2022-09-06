import React from 'react';
import Header from '../Components/Header/Header';
import Detail from '../Pages/Detail/Detail';
import Home from '../Pages/Home/Home';
import {IconContext} from 'react-icons'

function App() {
  return (

      <IconContext.Provider value={{style: {verticalAlign: 'middle'}}}>
     <Header/>
     <Home/>
     {/* <Detail/> */}
     </IconContext.Provider>
    
  );
}

export default App;
