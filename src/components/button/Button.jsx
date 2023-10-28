import React from "react";
import styles from "./Button.module.css"
const Button=(props)=>{
    return(
        <button id={props.id} className={styles.primary}>Continue</button>
    )
}

export default Button;