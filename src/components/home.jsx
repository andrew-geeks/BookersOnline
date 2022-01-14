import React,{useEffect,useState} from 'react';
//import Link from 'react-router-dom';


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
        <section>
            {
                items.map(item => (
                    <div>
                        <p>{item.name}</p>
                        <p>{item.msg}</p>
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