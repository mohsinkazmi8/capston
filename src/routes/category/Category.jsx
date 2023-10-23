import React, { useContext, useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../component/productcard/ProductCard';
import './category.scss'

const Category = () => {
    const {category} = useParams();
    const {CategoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(CategoriesMap[category])
    useEffect(() => {
        setProducts(CategoriesMap[category]);
    },[category,CategoriesMap])

    
  return (
    <>
      <h2 className='title'>{category}</h2>
      <div className="category-container">
          {products && products.map((product)=> (<ProductCard key={product.id} product={product}/>))}
      </div>
    </>
  )
}

export default Category;
