import React from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "./pages/splash/Splash";


const RoutePath=()=>{
    return(
        <Routes>
            <Route path="/" element={<Splash/>}/> 
        </Routes>
    )
}
export default RoutePath;