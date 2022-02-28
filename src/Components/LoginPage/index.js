import React, {useState} from "react";
import styles from './styles.module.css';
const LoginPage = () => {
    return(
        <div>
            <center>
            <form>
            <h3>Please fill up loginpage</h3>
            <label for="UserName"><b>UserName</b></label><br></br>
            <input type="text" placeholder="Enter UserName" name="UserName" required/><br></br>
            <label for="Password"><b>Password</b></label><br></br>
            <input type="password" placeholder="Enter Password" name="password" required/><br></br>
            <button type="submit">Login</button><br></br>
            <button type="CancelButton" class="CancelButton">Cancel</button><br></br>
            <span class="Password"> <a href="#">Forgotpassword?</a></span>
            </form>
            </center>
         </div>
    )
}
export default LoginPage;