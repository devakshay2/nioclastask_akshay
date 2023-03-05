import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {

    return( 
    <div className={classes.header}>
        <Link className={classes.content} to="/home">Home</Link>
        <Dropdown/>
    </div>);
   
};

export default Header;