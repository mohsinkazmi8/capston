 import React, { useContext } from 'react';
 import {ReactComponent as ShoppingBag} from './004 shopping-bag.svg'
 import './cart-icon.scss';
import { CartContext } from '../../contexts/CartContext';

 
 const CartIcon = () => {
    const {isCartOpen, setIsCartOpen , cartCount} = useContext(CartContext)
    const toggleIsCartOpen = () =>setIsCartOpen(!isCartOpen)
   return (
     <>
     <div className="cart-icon-container" onClick={toggleIsCartOpen}>
        <ShoppingBag className='shopping-icon'/>
        <span className="item-count">{cartCount}</span>
     </div>
     </>
   )
 }
 
 export default CartIcon;
 