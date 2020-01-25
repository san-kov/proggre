import React from "react"
import PropTypes from "prop-types"

export const Button = ({ children, color = "regular", ...props }) => {
    return (
        <button
            {...props}
            className={`button ${
                color === "regular" ? "" : `button--${color}`
            }`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    color: PropTypes.oneOf(["regular", "primary", "red"])
}
