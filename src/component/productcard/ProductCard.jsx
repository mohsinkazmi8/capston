import React, { useContext } from 'react'
import './product-card.scss';
import Button,{buttonTypeClasses} from '../button/Button'
import { CartContext } from '../../contexts/CartContext';


const ProductCard = ({product}) => {
  const {name,price,imageUrl} = product;

  const {addItemToCart} = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)
  return (
    <>
        <div className='product-card-container'>
          <img src={imageUrl} alt={name} />
          <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
          </div>
          <Button buttonType={buttonTypeClasses.inverted} onClick={addProductToCart} >Add to Cart</Button>
        </div>
    </>
    
  )
}

export default ProductCard
