import React from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper} from "../../../styles/styles";
import NavMobile from "./NavMobile";

const Header = () => {
    return (
        <HeaderWrapper>
            <nav className="nav-desk">
                <div className="logo">
                    <Link to="/" >Healthy Food</Link>
                </div>
                <div className="nav">
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
                </div>
            </nav>
            <NavMobile />
        </HeaderWrapper>
    );
};

export default Header;
