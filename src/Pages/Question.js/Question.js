import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MathJax } from "better-react-mathjax";
import { apiEndpoint } from "../../App/lib/constants";

const Question = () => {

    const [data, setData] = useState();
    const param = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const query = `${apiEndpoint}?QuestionID=${param.questionId}`
            const apiResponse = await fetch(query, {
                method: "GET",
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const responseData = await apiResponse.json();
            console.log(responseData);
            setData(responseData[0]?.Question);
        }
        fetchData();
    },[param.questionId]);

    return(
        <MathJax>
            {data}
        </MathJax>
    );
};

export default Question;