import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';


function Genre(){
    const history = useHistory();
    useEffect( ()=>{
        fetchItems();
    },[]);
    const [genre,setGenre] = useState([]);
    const fetchItems = async()=>{
        const response=await fetch("http://localhost:4000/genre")
        const data=await response.json()
        setGenre(data);
    }


    return(
        <div className='gen-block'>
            {
                genre.map(item=>(
                    <button class="cart-btn" style={{"marginRight":"15px"}} onClick={() => history.push('/genre/'+item)}>{item}</button>
                ))
            }
            
        </div>
    )
}

export default Genre;