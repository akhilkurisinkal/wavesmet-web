import React from "react";
import styles from "./EmailPrompt.module.css";
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import TextFieldWithEmailIcon from "../../components/textField/TextFieldWithEmailIcon";


const EmailPrompt=()=>{
    return(
        <div id="emailPrompt" className={styles.emailPrompt}>
            <div>
                <div>
                    <ArrowBack/>
                </div>
                <div>&nbsp;</div>
            </div>
            <div>
                <h3>Your Email Address</h3>
                <p>Enter your email addrress to get started.</p>
                <TextFieldWithEmailIcon/>
            </div>
        </div>
    )
}

export default EmailPrompt;