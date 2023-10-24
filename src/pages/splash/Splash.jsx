import React from "react";
import styles from "./Splash.module.css";
import Icon from "../../components/icon/Icon";
import { useNavigate } from "react-router-dom";


const Splash=()=>{
    
    const navigate=useNavigate();

    const gotoLogin=()=>{
        navigate("/emailPrompt");
    }

    return(
        <div id="splash" className={styles.splash}>
            <div className={`${styles.containerFlexColumn} ${styles.verticalHorizondalCenter}`}>
                <Icon/>
            </div>
           <div>
                <button id="splash-btn-1" className={`${styles.containerFlexRow} ${styles.verticalHorizondalCenter}`} onClick={gotoLogin} >Continue with email</button>
           </div>
        </div>
    )
}


export default Splash;

