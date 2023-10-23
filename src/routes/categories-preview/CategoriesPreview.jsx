import React,{useContext} from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import CategoryPreview from '../../component/category-preview/CategoryPreview';
const CategoriesPreview = () => {
    const {CategoriesMap} = useContext(CategoriesContext);  
    return (
      <>
        {
          Object.keys(CategoriesMap).map((title)=>{
            const products = CategoriesMap[title];
            return(
                <CategoryPreview key={title} title={title} products={products} />
            )
            })
        }
      </>
    )
}

export default CategoriesPreview
