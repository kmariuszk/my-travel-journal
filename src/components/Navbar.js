import React from "react"
import logo from "../images/logo.png"

function Navbar() {
    return (
        <nav>
            <img
                className="navbar--logo"
                src={logo}
                alt="logo"></img>
            <div className="navbar--title">my travel journal.</div>
        </nav>
    )
}

export default Navbar;