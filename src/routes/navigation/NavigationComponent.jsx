import React , {useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import './Navigation.scss';
import { signOutUser } from "../../utils/firebase/firebase";

const NavigationComponent = () =>{
    const {currentUser, setCurrentUser} = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async () =>{
        const response =  await signOutUser();

        setCurrentUser(null)
    }
    
    return(
      <>
        <nav className="navigation">
            <Link className="logo-container" to={'/'}>
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to={'/shop'}>
                    SHOP
                </Link>
                
                    {
                        (currentUser)? <span onClick={signOutHandler} className="nav-link">SIGN OUT</span> : <Link className="nav-link" to={'/sign-in'}>SIGN IN</Link>
                    }
                    
            </div>
        </nav>
        <Outlet/>
      </>
    )
  }
  export default NavigationComponent;