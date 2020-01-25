import React from "react"

export const Loader = ({ children, hasLoaded, status }) => {
    return (
        <div
            className={`sbl-circ-path ${
                hasLoaded ? "sbl-circ-path--loaded" : ""
            } ${
                status === "success"
                    ? "sbl-circ-path--success"
                    : status === "fail"
                    ? "sbl-circ-path--fail"
                    : ""
            }`}
        >
            {children}
        </div>
    )
}
