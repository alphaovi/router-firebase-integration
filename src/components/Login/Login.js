import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import "./Login.css";

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div className="google-button">
                <button onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
            <br />
            <form>
                <input type="email" name="" id="" placeholder="Your Email" />
                <br />
                <br />
                <input type="password"  placeholder="Your Password" />
                <br />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;