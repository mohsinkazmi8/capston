import React, { useContext } from 'react'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown'

const CartDropdown = () => {

  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckOutHandler = () =>{
    navigate('/check-out');
  }

  return (
    <>
      <CartDropdownContainer>
        <CartItems>
          {
          cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>)
            ):(
            <EmptyMessage>Cart Is Empty</EmptyMessage>
          )}
        </CartItems>
            <Button onClick={goToCheckOutHandler} > CHECKOUT </Button>
        
      </CartDropdownContainer>
    </>
  )
}

export default CartDropdown
