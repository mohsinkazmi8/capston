import React from 'react';
import './checkout-item.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const CheckOutItem = ({cartItem}) => {
    const {name,price,imageUrl,quantity} = cartItem;
    const {DeleteItemFromCart,removeItemFromCart,addItemToCart} = useContext(CartContext);

    const DeleteItemFromCartHandler = () => DeleteItemFromCart(cartItem);

    const removeItemFromCartHandler = () => removeItemFromCart(cartItem)
    const addItemToCartHandler = () => addItemToCart(cartItem);

  return (
    <>
      <div className="checkout-item-container">
         <div className="image-container">
            <img src={imageUrl} alt={name} />
         </div>
         <span className="name">{name}</span>
         <span className="quantity">
            <div className="arrow" onClick={removeItemFromCartHandler}>&#10094;</div>
            {quantity}
            <div className="arrow" onClick={addItemToCartHandler}>&#10095;</div>
          </span>
         <span className="price">{price}</span>
         <div onClick={DeleteItemFromCartHandler} className="remove-button">&#10005;</div>
      </div>
      
    </>
  )
}

export default CheckOutItem;
