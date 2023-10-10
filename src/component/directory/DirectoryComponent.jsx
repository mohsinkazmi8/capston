import React from "react";
import CategoryItem from "../catetory-item/CategoryItem";
import './categoryItem.style.scss'


const DirectoryComponent = ({categories}) =>{
    return(
        <div className="categories-container">
            {categories.map((category)=>(
            <CategoryItem category={category}/>
            ))}  
        </div>
    )
}
export default DirectoryComponent;