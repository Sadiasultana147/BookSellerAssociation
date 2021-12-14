import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart  } = props;
    
    let total =0;
    //total price count
    for(const book of cart){
        total = total + book.price;
       
        

    }
    
       
    return (
        <div  >
            
                <h2>Books Added: {props.cart.length}</h2>
                    <hr className="hr" />
                <h3 >Total: $ {total}</h3>
                <hr className="hr" />
                <h3>Selected Books  :</h3>

                {/* Showing selected book to cart */}
               <div >

                   {
                       cart.map( book=>  <div >
                           
                          <div className="cart">
                          <br />
                          
                           
                           <img className ="img" src ={book.image} alt=""/>
                           <h1 style={{paddingBottom:"10px"}}>{book.name}</h1>
                          </div>
                            
                        
                       <div  >
                      
                       </div>
                        
                        
                       </div>
                       )
                    }
               </div>
                
                
               
        </div>
    );
};

export default Cart;