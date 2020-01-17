import React, { useState } from "react"

import PropTypes from "prop-types"

export const Input = ({ handleChange, label, icon, ...props }) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className={`input ${focused && "input--focused"}`}>
            <label className="input__label">{label}</label>
            <div className="input__container">
                {icon && <span className="input__icon">{icon}</span>}
                <input
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={handleChange}
                    {...props}
                    className="input__input"
                />
            </div>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string
}
