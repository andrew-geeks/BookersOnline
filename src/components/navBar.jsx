import React from "react"
import {Link} from 'react-router-dom'

let image = require("../images/logo_main.png");

function Navbar(){
    return (
        <div className="navbar">
            <Link to='/' className=""><img src={image} height="70" width="70" alt="text"></img></Link>
            <Link to='/' className="heading-link"><h1 className="heading">BookersOnline</h1></Link>
            <div className="search-block">
                <div class="form-group">
                    <input class="form-field" type="email" placeholder="search for books,genres & authors"></input>
                    <span><i class="fas fa-search"></i></span>
                </div>
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


//for nav links
//<Link to='/' className="">Home</Link>
//<Link to='/cart' className="">cart</Link>
//<form id="jsform" action="whatever you want">
//input fields
//</form>

//<script type="text/javascript">
//  document.getElementById('jsform').submit();
//</script>