import { Route, Routes } from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import Authentication from "./routes/authentication/Authentication.jsx";

const Shop = () => {
  return(
    <>
      <h1>I AM A SHOP Component</h1>
    </>
  )
}

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavigationComponent/>} >
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Authentication/>} />
        <Route index={true} element={<HomeComponent />} />
      </Route>
    </Routes> 
    </>
  );
}

export default App;
