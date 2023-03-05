import { MathJaxContext } from 'better-react-mathjax';
import { RouterProvider } from 'react-router-dom';
import { router } from './Pages/router';


function App() {
  return (
    <MathJaxContext>
      <RouterProvider router={router}/>
    </MathJaxContext>
    
  );
}

export default App;
