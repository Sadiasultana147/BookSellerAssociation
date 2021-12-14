import React, { useEffect, useState } from 'react';

import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './BookList.css'

const BookList = () => {
    

    // useState for data loading
    const [books,setBook] = useState([]);

    const [cart,setCart] = useState([]);

    // useEffect for fetch data from own fakeData
    useEffect(()=>{
        fetch('./book.Json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    // Create addCart handler function
    const handleAddToCart = (book)=>{
        const newCart = [...cart, book];
       
        setCart( newCart);
        
    }
    return (
        <div>
            <h1 className="total"> Total Books : {books.length}</h1>
            <div className="booklist-container">
               <div >
                   {/* BookList Side */}
                   
                   <div className="bookUi">
                       
                   {
                       
                        books.map(book => <Book 
                            key = {book.id}
                             book= {book }
                            
                           
                             handleAddToCart ={handleAddToCart}
                        
                        
                        >

                        </Book>)
                    }
                   </div>
               </div>
               {/* Cart Side */}
               <div className="cart-container">
                   
                   <Cart  cart ={cart}
                        
                    ></Cart>
               </div>

           </div>
          
        </div>
    );
};

export default BookList;