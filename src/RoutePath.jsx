import React from "react";
import { Route, Routes } from "react-router-dom";
import Splash from "./pages/splash/Splash";
import EmailPrompt from "./pages/email-prompt/EmailPrompt";
import CreatePassword from "./pages/create-password/CreatePassword";
import VerifyCode from "./pages/verify-code/verifyCode";


const RoutePath=()=>{
    return(
        <Routes>
            <Route path="/" element={<Splash/>}/> 
            <Route path="/emailPrompt" element={<EmailPrompt/>}/> 
            <Route path="/createPassword" element={<CreatePassword/>}/> 
            <Route path="/verifyCode" element={<VerifyCode/>}/> 
        </Routes>
    )
}
export default RoutePath;