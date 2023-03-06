import { MathJaxContext } from 'better-react-mathjax';
import Header from './Components/Header/Header';
import QuestionComponent from './Components/QuestionComponent/QuestionComponent';


function App() {
  return (
    <MathJaxContext>
      <Header/>
      <QuestionComponent/>
    </MathJaxContext>
    
  );
}

export default App;
