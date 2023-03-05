import { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "../../App/lib/constants"; 
import classes from "./Dropdown.module.css"

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  
  return (
    
      <div className={classes.dropdown}>
      <button onClick={handleOpen} className={classes.dropbtn}>Questions</button>
      {open ? <div className={classes.dropList}>
        { 
         questions.map((item,i) => {
            return(
               <Link className={classes.dropdownContent} key={i}  to={`/${item.questionId}`}>{item.question}</Link>
            )
         })
       }</div>
      : null}
    </div>
    
    
  );
};

export default Dropdown;