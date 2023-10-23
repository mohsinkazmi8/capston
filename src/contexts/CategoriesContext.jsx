import {createContext, useEffect, useState} from 'react';
// import SHOP_DATA from '../shopData.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const CategoriesContext = createContext({
    Categories: {}
});

export const CategoriesProvider =({children}) =>{
    const [CategoriesMap , setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoryMap();
    },[])

    const value = {CategoriesMap}
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
