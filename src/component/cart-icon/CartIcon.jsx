 import React, { useContext } from 'react'; 
import { CartContext } from '../../contexts/CartContext';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon';

 
 const CartIcon = () => {
    const {isCartOpen, setIsCartOpen , cartCount} = useContext(CartContext)
    const toggleIsCartOpen = () =>setIsCartOpen(!isCartOpen)
   return (
     <>
     <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount className="item-count">{cartCount}</ItemCount>
     </CartIconContainer>
     </>
   )
 }
 
 export default CartIcon;
 