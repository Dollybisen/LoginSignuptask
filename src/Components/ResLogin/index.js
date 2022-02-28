import React from "react";
import styles from './styles.module.css';
const ResLogin = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}><span>Login</span></div>
                <form action="#">
                    <div className={styles.row}>
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Email or Phone" required />
                    </div>
                    <div className={styles.row}>
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className={styles.row}>
                        <button type="submit">Login</button>
                        <div className="pass"><a href="#">Forgotpassword</a></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ResLogin;