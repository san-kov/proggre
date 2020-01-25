import React, { useState } from "react"

import { popupContext } from "./PopupContext"
import { popupStatuses as statuses } from "../../utils/variablers"

export const PopupState = ({ children }) => {
    const [visible, setVisible] = useState(false)
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState(statuses.pending)
    const [icon, setIcon] = useState(null)
    const [isUIBlocked, setUIBlocked] = useState(false)

    const resetState = () => {
        setVisible(false)
        setMessage("")
        setIcon(null)
        setStatus(statuses.pending)
        setUIBlocked(false)
    }

    const initializePopup = (message, icon, isUIBlocked) => {
        setStatus(statuses.pending)
        setVisible(true)
        setMessage(message)
        setIcon(icon)
        setUIBlocked(isUIBlocked)
    }

    const hideWithSuccess = message => {
        setStatus(statuses.success)
        setMessage(message)
        setTimeout(() => {
            resetState()
        }, 1500)
    }

    const hideWithFail = message => {
        setStatus(statuses.fail)
        setMessage(message)
        setTimeout(() => {
            resetState()
        }, 1500)
    }

    return (
        <popupContext.Provider
            value={{
                visible,
                message,
                status,
                initializePopup,
                hideWithSuccess,
                hideWithFail,
                icon,
                isUIBlocked
            }}
        >
            {children}
        </popupContext.Provider>
    )
}
