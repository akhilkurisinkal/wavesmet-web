import React from "react";
import styles from "./EmailPrompt.module.css";

const EmailPrompt=()=>{
    return(
        <div id="emailPrompt" className={styles.emailPrompt}>
            <div>
                <div>
                    <button className={styles.backBtn}>&nbsp;</button>
                </div>
                <div>&nbsp;</div>
            </div>
            <div>
                &nbsp;
            </div>
        </div>
    )
}

export default EmailPrompt;