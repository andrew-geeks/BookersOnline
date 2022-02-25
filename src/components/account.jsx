import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';



function Account(){



    return(
        <section className='acc-block'>
            <div className='acc-btn-block'>
                <button class="cart-btn" style={{"background-color":"#f77614"}}> LogIn</button>
                <button class="cart-btn" style={{"background-color":"#f55442"}}> SignUp<i class="fa-solid fa-angle-up"></i></button>
            </div>
        </section>
    )
}

export default Account;

