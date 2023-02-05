import styles from "../Login/Login.module.sass";
import * as React from "react";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../../firebase"
import {useNavigate} from "react-router";
import logo from "./logo.png";

function Login() {
    const navigate = useNavigate()
    const login = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user.displayName )
                navigate("/home")
            }).catch(console.error);
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={login}>
                Login
            </button>
            <center>
                <img className={styles.logo} src={logo} alt="Logo" />
            </center>
        </div>
    );
}

export default Login;

