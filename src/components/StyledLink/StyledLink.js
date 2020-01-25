import React from "react"
import { NavLink } from "react-router-dom"

const StyledLink = ({ path, className, children, ...props }) => {
    return (
        <NavLink
            // to={path}
            exact
            className={`${className}`}
            activeClassName={`${className}--active`}
            {...props}
        >
            {children}
        </NavLink>
    )
}

export default StyledLink
