import React from "react";
import { NavMobileWrapper } from "../../../styles/styles";
import { Link } from "react-router-dom";


const NavMobile = () => {
    return (
        <NavMobileWrapper>
            <ul>
                <a href="#recipes">
                    <li>HEALTHY RECIPES</li>
                </a>
                <a href="#blog">
                    <li>BLOG</li>
                </a>
                <a href="#join">
                    <li>JOIN</li>
                </a>
                <Link to="/register" className="register-button">
                    <li>REGISTER</li>
                </Link>
            </ul>
        </NavMobileWrapper>
    );
};

export default NavMobile;
