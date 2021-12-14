import React from 'react';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Book.css';

const Book = (props) => {
    // destructing
    const {name, image,price,author, publisher, edition} =props.book;

    // for Icon
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    
    
    return (
        
        <div className ="single-book">
            
            
            <div className="image">
            <img  src={image} alt=""/>
            </div>
          <div className="text">
          <h2>Title : {name}</h2>
          <p>Author :  {author}</p>
          <p><small> Publisher : {publisher}</small> </p>
         
           <p>Edition : {edition} </p>
          
           <h4>Price : ${price}</h4>

           <button className ="btn" onClick ={()=>props.handleAddToCart(props.book)}>
           {element}
               add to cart
           </button>
           
          </div>
        </div>
    );
};

export default Book;