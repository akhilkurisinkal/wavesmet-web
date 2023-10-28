import React from "react";
import styles from "./CreatePassword.module.css"
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import TextFieldWithEmailIcon from "../../components/textField/TextFieldWithEmailIcon";
import Button from "../../components/button/Button";

const CreatePassword=()=>{
    return(
        <div id="createPassword" className="defaultPageLayout">
            <div>
                <div>
                    <ArrowBack/>
                </div>
                <div>&nbsp;</div>
            </div>
            <div>
                <h3>Create a password</h3>
                <p>Passwords safeguard your account and secure your personal data.</p>
                <TextFieldWithEmailIcon placeholder="Create a password" icon="passwordIcon"/>
                <Button id="continue"/>
            </div>
        </div>
    )
}

export default CreatePassword;