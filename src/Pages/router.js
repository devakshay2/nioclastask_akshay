import { createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import RootComponent from './RootComponent';
import Error from './Error/Error';
import Question from './Question.js/Question';

export const router = createBrowserRouter([
        {
           path: '/', 
          element: <RootComponent/>,
          errorElement: <Error/>,
          children: [
            {path:'/', element: <Home/>},
            {path:'/home', element: <Home/>},
            {path:'/:questionId', element: <Question/>}
        ]
    }
]);