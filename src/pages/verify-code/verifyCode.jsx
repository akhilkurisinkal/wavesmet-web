import React from "react";
import styles from "./verifyCode.module.css";
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import TextFieldWithEmailIcon from "../../components/textField/TextFieldWithEmailIcon";
import Button from "../../components/button/Button";

const VerifyCode=()=>{
    return(
        <div id="VerifyCode" className="defaultPageLayout">
            <div>
                <div>
                    <ArrowBack/>
                </div>
                <div>&nbsp;</div>
            </div>
            <div>
                <h3>Verification code</h3>
                <p>Enter the code we sent to via email.</p>
                <TextFieldWithEmailIcon placeholder="Code" icon="codeIcon" width="half" />
                <Button id="continue"/>
            </div>
        </div>
    )
}

export default VerifyCode;