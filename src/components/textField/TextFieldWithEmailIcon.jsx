import React from "react";
import styles from "./TextFieldWithEmailIcon.module.css";
import ArrowBack from '@material-ui/icons/ArrowBackIos';

const TextFieldWithEmailIcon=(props)=>{
    return(
        <div className={styles.textFieldWithIcon}>

            <div className={styles.typingArea}>
                <div>
                    hi
                </div>
                <div>
                    <input type="text" placeholder={props.placeholder}/>
                </div>
            </div>


            <div className={styles.errorArea}>
                email is invalid
            </div>
            
        </div>
    )
}


export default TextFieldWithEmailIcon;