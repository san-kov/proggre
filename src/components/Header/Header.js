import React from "react"
// import { auth } from "../../firebase/firebase"

import StyledLink from "../StyledLink/StyledLink"

export const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <div className="header__logo"></div>
            <nav className="header__nav">
                <StyledLink to="/" className="header__nav-item">
                    Главная
                </StyledLink>
                {/* <div
                    href="#"
                    className="header__nav-item"
                    onClick={() => auth.signOut()}
                >
                    Вход
                </div> */}
                <StyledLink to="/login" className="header__nav-item">
                    Вход
                </StyledLink>
            </nav>
        </div>
    )
}
