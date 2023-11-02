import { Route, Routes } from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import Authentication from "./routes/authentication/Authentication.jsx";
import Shop from "./routes/shop/Shop";
import CheckOut from "./routes/checkout/CheckOut";



const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavigationComponent/>} >
        <Route path="shop/*" element={<Shop/>} />
        <Route path="sign-in" element={<Authentication/>} />
        <Route index={true} element={<HomeComponent />} />
        <Route path="check-out" element={<CheckOut />} />
      </Route>
    </Routes> 
    </>
  );
}

export default App;
