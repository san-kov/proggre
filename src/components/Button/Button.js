import React from "react"
import PropTypes from "prop-types"

export const Button = ({ children, type = "regular", ...props }) => {
    return (
        <button
            {...props}
            className={`button ${type === "regular" ? "" : `button--${type}`}`}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.oneOf(["regular", "primary"])
}
