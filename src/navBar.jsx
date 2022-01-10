import React from "react"
let image = require("./images/logo_main.png");

function Navbar(){
    return (
        <div className="navbar">
            <img src={image} height="70" width="70" alt="text"></img>
            <h1 className="heading">BookersOnline</h1>
            
        </div>
    )
}

export default Navbar;