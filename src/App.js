import React, { useState, useEffect, useContext } from "react"
import "./app.scss"
import { LoginSignup } from "./pages/LoginSignup/LoginSignup"
import { Header } from "./components/Header/Header"
import { Popup } from "./components/Popup/Popup"
import { popupContext } from "./context/popup/PopupContext"
import { BrowserRouter, Switch, Route } from "react-router-dom"
function App() {
    const { initializePopup, hideWithSuccess } = useContext(popupContext)

    return (
        <BrowserRouter>
            <Header />
            <Popup />
            <div className="app">
                <Switch>
                    <Route path="/" exact component={LoginSignup} />

                    <Route path="/login" exact component={LoginSignup} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
