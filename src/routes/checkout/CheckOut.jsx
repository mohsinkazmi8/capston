import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './checkout.scss';
import CheckOutItem from '../../component/checkout-item/CheckOutItem';

const CheckOut = () => {
    const {cartItems,cartTotal } = useContext(CartContext)
  return (
    <>

        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block"><span>Discription</span></div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-block"><span>Remove</span></div>
            </div>
        
            {
                cartItems.map(
                    (cartItem) => <CheckOutItem key={cartItem.id} cartItem={cartItem} /> )
            }
            <span className='total'>Total: {cartTotal}Rs</span>
        </div>
    </>
  )
}

export default CheckOut;
