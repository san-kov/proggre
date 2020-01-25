import React, { useState } from "react"

import PropTypes from "prop-types"
import { useEffect } from "react"

export const Input = ({
    handleChange,
    label,
    icon,
    onBlur: handleBlur,
    ...props
}) => {
    const [focused, setFocused] = useState(false)
    const [touched, setTouched] = useState(false)

    return (
        <div className={`input ${focused && "input--focused"}`}>
            <label className="input__label">{label}</label>
            <div className="input__container">
                {icon && <span className="input__icon">{icon}</span>}
                <input
                    onFocus={() => {
                        setFocused(true)
                        if (!touched) {
                            setTouched(true)
                        }
                    }}
                    onBlur={e => {
                        if (handleBlur) handleBlur(e)
                        setFocused(false)
                    }}
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
