import styles from "../Home/Home.module.sass";
import * as React from "react";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../../firebase"
import {useNavigate} from "react-router";

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
        <div className={styles.login}>
            <button className={styles.button} onClick={login}>
                Login
            </button>
        </div>
    );
}

export default Login;

