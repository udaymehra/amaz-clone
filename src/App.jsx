import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
 
import Contact from './components/Contact/Contact';
import Navbaar from './components/header/Navbaar';

import About from './components/About/About';
import Home from './components/Home/Home';
// import Shop from './components/Shop/Shop';
// import Login from './components/Account2/login';
import Signup from './components/Signup/Signup';
// import Account from './components/Account2/Account.jsx';
import Login from './components/Account/login.jsx';

const App = () => {
    return (
        <>
         <BrowserRouter>
              <Navbaar/>
                <Routes>
                  {/* <Route path="/dashboard" element={<Home/>} /> */}
                  {/* <Route path='/Home' element={<Home />} /> */}
                  {/* <Route path='/Shop' element={<Shop/>}/> */}
                  <Route path='/Contact' element={<Contact/>} />
                  <Route path='/About' element={<About/>} />
                  <Route path='/Account' element={<Login />} />
                  <Route path='/Signup' element={<Signup />} />                  
                </Routes> 
            </BrowserRouter>
        </>
    );
};

export default App;
