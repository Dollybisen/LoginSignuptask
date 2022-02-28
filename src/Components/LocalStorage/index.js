import React, { useState } from "react";
import styles from "./styles.module.css";
const LocalStorage = () => {

    let handler = () => {
        localStorage.setItem('UserName', 'DollyBisen');
        localStorage.setItem('Password', '082000');
    };
    let Remove = () => {
        localStorage.removeItem("UserName");
        localStorage.removeItem("Password");
    }
    return (
        <div className={styles.demo}>
            <center>
                <form>
                    <h2>Using LocalStorage in React form</h2>
                    <label for="UserName"><b>Username</b></label><br></br>
                    <input type="text" placeholder="Enter username"required /><br></br><br></br>
                    <label for="EnterPassword"><b>Password</b></label><br></br>
                    <input type="text" placeholder="Enter Password"required /><br></br><br></br>
                    <button onClick={handler}>Clickme</button><br></br><br></br>
                    <button onClick={Remove}>Remove</button><br></br>
                    <span class="password"><a href="*">Forgotpassword</a></span>
                </form>
            </center>
        </div>
    )
}
export default LocalStorage;