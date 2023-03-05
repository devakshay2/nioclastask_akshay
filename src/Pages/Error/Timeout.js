import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Timeout = (props) => {
    const [count, setCount] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        for(let i=3, j=0; i>=0 & j<=3; i--, j++){
            setTimeout(()=> {
                setCount(i);
                j++;
                if(i===0) setTimeout(navigate("/"));
            }, j*1000);
        }
        ;
    },[navigate]);

    return(
        <h2>{`This page doesnot exist. You will be redirected to Home in ${count} seconds.`}</h2>
    );
};

export default Timeout;