import React, { useState, useEffect, useContext } from "react"
import "./app.scss"
import { LoginSignup } from "./pages/LoginSignup/LoginSignup"
// import { auth, createUserProfile } from "./firebase/firebase"
import { FaLock } from "react-icons/fa"
import { Header } from "./components/Header/Header"
import { Popup } from "./components/Popup/Popup"
import { popupContext } from "./context/popup/PopupContext"
import { BrowserRouter, Switch, Route } from "react-router-dom"
function App() {
    const [user, setUser] = useState(null)
    const { initializePopup, hideWithSuccess } = useContext(popupContext)

    // useEffect(() => {
    //     const unsubscribeFromAuth = auth.onAuthStateChanged(async userData => {
    //         console.log("userData", userData)

    //         if (!userData) return setUser(null)

    //         initializePopup("Authorizing you..", <FaLock />, true)
    //         const userRef = await createUserProfile(userData)

    //         userRef.onSnapshot(snapshot => {
    //             console.log("snapshot")
    //             const data = snapshot.data()

    //             setUser({
    //                 id: snapshot.id,
    //                 ...data
    //             })

    //             hideWithSuccess(`Welcome, ${data.displayName.split(" ")[0]} `)
    //         })
    //     })

    //     return () => unsubscribeFromAuth()
    // }, [])

    useEffect(() => {
        console.log(user)
    }, [user])
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
