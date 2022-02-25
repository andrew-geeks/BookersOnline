import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

function SearchPage(){
    const queryParams = new URLSearchParams(window.location.search)
    const value = queryParams.get("sQuery")
    useEffect( ()=>{
        fetchItems(value);
    },[value]);
    const [items,setItems] = useState([]);
    const fetchItems = async(uValue)=>{
        const response=await fetch("http://localhost:4000/search?sQuery="+uValue)
        const data=await response.json()
        setItems(data);
    }
    

    return(
        <div>
            <section className='books-container'>
            {
                items.length === 0?<h3 className='no-data'>~No Data Found😔</h3>:
                items.map(item => (
                    <div className='book-block'>
                    <i class="fa-solid fa-face-frown"></i>
                    <Link to={'../books/'+item.bookid}>
                        <img src={item.imglink} className='book-img' alt='test'></img>
                    </Link>
                        <Link to={'../books/'+item.bookid} className='book-name'><b><p>{item.bookname}</p></b></Link>
                        <div className='data-block'>
                            <Link to={'../genre/'+item.genre} style={{"text-decoration":"none","color":"black"}}>
                                <p className='book-price'><i class="fas fa-book-open" style={{"color":"gray"}}></i> {item.genre}</p>
                            </Link>
                            <p className='book-price'><i class="fas fa-user-alt" style={{"color":"gray"}}></i> By {item.authorname}</p>
                            <b><p className='book-price'>Rs. {item.price}.00</p></b>
                        </div>
                    </div>
                ))
            }
            </section>
        </div>
    )    
}



export default SearchPage;