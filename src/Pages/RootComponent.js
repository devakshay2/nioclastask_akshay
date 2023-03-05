import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const RootComponent = () => {
    return(
    <>
      <Header/>
      <Outlet/>
    </>
    );
};

export default RootComponent;