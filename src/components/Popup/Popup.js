import React, { useContext } from "react"
import { Loader } from "../Loader/Loader"
import { FaCheck, FaExclamation } from "react-icons/fa"
import { popupStatuses as statuses } from "../../utils/variablers"
import { popupContext } from "../../context/popup/PopupContext"

const getIcon = status => {
    const prop = {
        color: `${
            status === statuses.success
                ? "#3bf068"
                : status === statuses.fail
                ? "rgb(230, 81, 81)"
                : "grey"
        }`,
        size: "20px"
    }

    if (status === statuses.success) {
        return <FaCheck {...prop} />
    } else if (status === statuses.fail) {
        return <FaExclamation {...prop} />
    } else return null
}

export const Popup = () => {
    const { visible, message, status, icon, isUIBlocked } = useContext(
        popupContext
    )

    return (
        <>
            {
                <div
                    className={`dimmer ${isUIBlocked ? "dimmer--visible" : ""}`}
                ></div>
            }
            <div className={`popup ${visible ? "popup--visible" : ""}`}>
                <div className="popup__wrapper">
                    <Loader
                        hasLoaded={
                            status === statuses.success ||
                            status === statuses.fail
                        }
                        status={status}
                    ></Loader>
                    <div className="popup__loader">
                        {getIcon(status) || icon}
                    </div>
                </div>

                <p>{message}</p>
            </div>
        </>
    )
}
