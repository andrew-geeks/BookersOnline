import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';


function Home(){
    useEffect( ()=>{
        fetchItems();
    },[]);
    const [items,setItems] = useState([]);
    const fetchItems = async()=>{
        const response=await fetch("http://localhost:4000")
        const data=await response.json()
        setItems(data);
    }
    
    return(
        <section className='books-container'>
            {
                items.map(item => (
                    <div className='book-block'>
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
        
       
    )
}

export default Home;
/*            {/* {
            items.map(item =>{
                <div>
                    <p>{item.name}</p>
                    <p>{item.msg}</p>
                </div>
            })
            } */