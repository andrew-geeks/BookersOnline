import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';




function Product(){
    const {id}  = useParams();
    useEffect( ()=>{
        FetchItems(id);
    },[id]);
    const [items,setItems] = useState([]);
    const FetchItems = async(uId)=>{
        
        const response=await fetch("http://localhost:4000/books/"+uId)
        const data=await response.json()
        setItems(data);
    }
    console.log(items);

    return(
        <section className='product-container'>
            {
                items.map(item=>(
                    <div className='product-img-block'>
                        <img src={item.imglink} className='img' alt='test'></img>
                    </div>
                ))
            }
            {
                items.map(item=>(
                    <div className='product-info-block'>
                        <strong><p className='productHeading'>{item.bookname}</p></strong>
                        <hr></hr>
                        <strong><p className='productPrice'>Rs. {item.price}.00</p></strong>
                        <p className='productGenre'><i class="fas fa-book-open" style={{"color":"gray"}}></i> {item.genre}</p>
                        <p className='productAuthor'><i class="fas fa-user-alt" style={{"color":"gray"}}></i> {item.authorname}</p>
                    </div>
                ))
            }
        </section>    
    )
}

export default Product;