import DirectoryComponent from "../../component/directory/DirectoryComponent";
import { Outlet } from "react-router-dom";



const HomeComponent = () => {
  
  return (
    <>
        <Outlet/>
        <DirectoryComponent />
    </>
  );
}

export default HomeComponent;
