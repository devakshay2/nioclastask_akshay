import { useEffect, useState } from "react";
import { MathJax } from "better-react-mathjax";
import { apiEndpoint } from "../../App/lib/constants";
import classes from './QuestionComponent.module.css';
import { questions } from "../../App/lib/constants";
import './QuestionComponent.css';

const QuestionComponent = () => {

    const [data, setData] = useState();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async() => {
             const query = `${apiEndpoint}?QuestionID=${questions[index]}`;
             const apiResponse = await fetch(query, { method: "GET" });
             const responseData = await apiResponse.json();
             setData(responseData[0]?.Question);
        }
        fetchData();
    },[index]);

    const onBack = () => {
       if(index === 0){
        setIndex(questions.length-1);
        
       } else {
        setIndex(index-1);
       }
    }

    const onForward = () => {
        if(index === questions.length-1){
         setIndex(0);
        } else {
            setIndex(index+1);
        }
        
     }

    return(
        <>
         <div className={classes.navigation}>
           <span id="back" onClick={onBack}>{'<'}</span>
           <div className={classes.navigationText}> {`${index+1}/${questions.length}`} </div>
           <span id="forward" onClick={onForward}>{'>'}</span>
          </div>
          <MathJax className={classes.text}>
            {data}
          </MathJax>
        </>
        
    );
};

export default QuestionComponent;