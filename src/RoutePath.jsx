import React from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import EmailPrompt from "./pages/email-prompt/EmailPrompt";


const RoutePath=()=>{
    return(
        <Routes>
            <Route path="/" element={<Splash/>}/> 
            <Route path="/emailPrompt" element={<EmailPrompt/>}/> 
        </Routes>
    )
}
export default RoutePath;