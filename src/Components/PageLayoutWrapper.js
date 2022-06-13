import React from "react";

import classes from "./PageLayoutWrapper.module.css";
import logo from "../Assets/logoipsum-logo-8.svg";
import {Link} from "react-router-dom";


const PageLayoutWrapper = props => {
    return <React.Fragment>
        <header>
            <div className={
                classes.headerLogo
            }>
                <img src={logo}
                    alt="logo not available"/>
            </div>
            <nav className={
                classes.navBar
            }>
                <ul>
                    <li>Hi user!</li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
        {
        props.children
    } </React.Fragment>
}

export default PageLayoutWrapper;
