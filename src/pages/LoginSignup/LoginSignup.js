import React from "react"

import { SignUp } from "../../components/Signup/SignUp"
import { LogIn } from "../../components/Login/LogIn"

export const LoginSignup = () => {
    return (
        <div className="login-signup">
            <LogIn />
            <SignUp />
        </div>
    )
}
