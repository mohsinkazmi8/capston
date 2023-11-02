import React from "react";
import { BackgroundImage, DirectoryItemBody, DirectoryItemContainer } from "../directory/categoryItem.style";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({category}) =>{
    const {imageUrl,title,route} = category;
    const navigate = useNavigate();
    const NavigateHandler = () => navigate(route);
    return(
        <DirectoryItemContainer onClick={NavigateHandler}>
            <BackgroundImage imageUrl ={imageUrl}  />
            <DirectoryItemBody  >
                <h1>{title}</h1>
                <p>Shop Now</p>
            </DirectoryItemBody>
       </DirectoryItemContainer>
    )
}
export default DirectoryItem;