import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import  LoginPage from "./scenes/LoginPage";
import Appcomponent from "./scenes/pages/AppComponent"
import Team from "./scenes/team";

const Routers = () => {
   return(
       <BrowserRouter>
        
           <Route path="/" element={<Appcomponent/>} /> 
           <Route path="/login" element={<LoginPage/>} /> 
           <Route path="/InternalControls" element={<Team/>} /> 
       </BrowserRouter>
   )
};

export default Routers;
