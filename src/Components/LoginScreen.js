import React from "react";
import classes from "./LoginScreen.module.css";

const LoginScreen = () => {

    const onSubmitHandler = ev => {
        ev.preventDefault();
        window.location.replace("/");
    }

    return (
        <div className={
            classes.loginContainer
        }>
            <h2>Login</h2>
            <form onSubmit={onSubmitHandler}>
                <input id="email" name="email" type="email" placeholder="Your email:" required/>
                <input id="password" name="password" type="password" placeholder="Your password:" required/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default LoginScreen;
