import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function GenPage(){
    const {getGenre}  = useParams(); //parameter should same as given in the node side.
    useEffect( ()=>{
        FetchItems(getGenre);
    },[getGenre]);
    const [items,setItems] = useState([]);
    const FetchItems = async(uGen)=>{
        
        const response=await fetch("http://localhost:4000/genre/"+uGen)
        const data=await response.json()
        setItems(data);
    }
    console.log(items);


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

export default GenPage;