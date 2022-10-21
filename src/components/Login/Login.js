import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
    
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please Login</h3>
            <div className="google-button">
                <button onClick={() => signInWithGoogle()}>Sign In with Google</button>
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