import React from "react";
import styles  from './styles.module.css';
const SignupPage = ()=>{
    // const [Email, setEmail] = useState("");
    // const [Password, setPassword] = useState("");
    return(
        <div>
            <center>
                <form>
                <h2>fill in this form signup page</h2>
                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input><br></br>
                {/* value = {Email} */}
                {/* onChange={(e) => setEmail(e.target.value)} */}
                <label for="Password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required/><br></br>
                {/* value = {Password} */}
                {/* onChange={(e) => setPassword(e.target.value)} */}
                <label for="password-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="password-repeat" required/><br></br>
                <button type="button" class="cancelbtn">Cancel</button><br></br>
                <button type="submit" class="signupbtn">Sign Up</button>
            </form>
            </center>
        </div>
    )
}
 export default SignupPage;