import React from "react";
import './categoryItem.style.scss'
import DirectoryItem from "../directory-item/DirectoryItem";


const DirectoryComponent = ({categories}) =>{
    return(
        <div className="categories-container">
            {categories.map((category)=>(
            <DirectoryItem category={category}/>
            ))}  
        </div>
    )
}
export default DirectoryComponent;