import React from "react"
import StyledLink from "../StyledLink/StyledLink"

export const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <div className="header__logo"></div>
            <nav className="header__nav">
                <StyledLink to="/" className="header__nav-item">
                    Главная
                </StyledLink>

                <StyledLink to="/login" className="header__nav-item">
                    Вход
                </StyledLink>
            </nav>
        </div>
    )
}
