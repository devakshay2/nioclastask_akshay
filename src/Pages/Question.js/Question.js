import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MathJax } from "better-react-mathjax";
import { apiEndpoint } from "../../App/lib/constants";
import classes from './Question.module.css';

const Question = () => {

    const [data, setData] = useState();
    const param = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const query = `${apiEndpoint}?QuestionID=${param.questionId}`;
            const apiResponse = await fetch(query, {
                method: "GET",
                // headers: {
                //     'Referrer-Policy': 'unsafe-url',
                //     'Access-Control-Allow-Origin': '*',
                //     'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                //     'Access-Control-Allow-Headers': 'Content-Type',
                //     'Connection': 'keep-alive'
                // }
            });
            const responseData = await apiResponse.json();
            setData(responseData[0]?.Question);
        }
        fetchData();
    },[param.questionId]);

    return(
        <MathJax className={classes.text}>
            {data}
        </MathJax>
    );
};

export default Question;