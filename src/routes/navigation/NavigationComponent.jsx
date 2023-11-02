import React , {useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../component/cart-icon/CartIcon";
import CartDropdown from "../../component/cart-dropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
import { LogoContainer, NavLink, NavLinkContainer, NavigationContainer } from "./Navigation.style";

const NavigationComponent = () =>{
    const {currentUser, setCurrentUser} = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async () =>{
        const response =  await signOutUser();

        setCurrentUser(null)
    }
    
    const {isCartOpen} = useContext(CartContext) 

    return(
      <>
        <NavigationContainer>
            <LogoContainer to={'/'}>
                <CrownLogo />
            </LogoContainer>
            <NavLinkContainer >
                <NavLink className="nav-link" to={'/shop'}>
                    SHOP
                </NavLink>
                
                    {
                        (currentUser)? <NavLink as='span' onClick={signOutHandler} >SIGN OUT</NavLink> : <NavLink  to={'/sign-in'}>SIGN IN</NavLink>
                    }
                <CartIcon/>
            </NavLinkContainer>
           {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </>
    )
  }
  export default NavigationComponent;