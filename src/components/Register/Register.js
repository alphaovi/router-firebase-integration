import React from 'react';
import "./Register.css";

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form>
                <br />
                <input type="text" placeholder="Enter Your Name"/>
                <br />
                <br />
                <input type="email" name="" id="" placeHolder="Enter your email"/>
                <br />
                <br />
                <input type="password" name="" id="" placeholder="Your Passoword"/>
                <br />
                <br />
                <input type="submit"  value="Login"/>
            </form>
        </div>
    );
};

export default Register;