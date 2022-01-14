import React from "react"
//import {Link} from 'react-router-dom'

let image = require("../images/logo_main.png");

function Navbar(){
    return (
        <div className="navbar">
            <img src={image} height="70" width="70" alt="text"></img>
            <h1 className="heading">BookersOnline</h1>
            
        </div>
    )
}

export default Navbar;


//for nav links
//<Link to='/' className="">Home</Link>
//<Link to='/cart' className="">cart</Link>