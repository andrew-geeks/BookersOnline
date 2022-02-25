import React from "react"
import {Link} from 'react-router-dom'

let image = require("../images/logo_main.png");

function Navbar(){
    return (
        <div className="navbar">
            <Link to='/' className=""><img src={image} height="70" width="70" alt="text"></img></Link>
            <Link to='/' className="heading-link"><h1 className="heading">BookersOnline</h1></Link>
            <div className="search-block">
                <form method="GET" action="/search">
                    <div class="form-group">

                            <input class="form-field" required type="text" name="sQuery" placeholder="search for books,genres & authors"></input>
                            <span><button type="submit"  style={{"color":"black","backgroundColor":"#EEF4FF","border":"none"}}><i class="fas fa-search"></i></button></span>
                    </div>
                </form>
            </div>
            <div className="content-block">
                <Link to='/cart' className="Link"><i class="fas fa-shopping-cart"></i></Link>
                <Link to='/account' className="Link"><i class="fas fa-user"></i></Link>
                <Link to='/genre' className="Link"><i class="fas fa-book-open"></i></Link>

            </div>
        </div>
    )
}

export default Navbar;

