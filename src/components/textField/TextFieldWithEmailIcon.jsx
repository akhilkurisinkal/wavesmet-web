import React from "react";
import styles from "./TextFieldWithEmailIcon.module.css";


const TextFieldWithEmailIcon=(props)=>{
    return(
        <div className={`${styles.textFieldWithIcon} ${styles[props.width]}`}>

            <div className={styles.typingArea}>
                <div className={`${styles.textFieldIcon} ${styles[props.icon]}`}>
                    &nbsp;
                </div>
                <div>
                    <input type="text" placeholder={props.placeholder}/>
                </div>
            </div>


            <div className={styles.errorArea}>
                &nbsp;
            </div>
            
        </div>
    )
}

export default TextFieldWithEmailIcon;