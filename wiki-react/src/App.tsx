import './App.css';
import "./generate.css"
import WikiComponent from './components/wiki-component';
import { exemplePageTropidophorus } from './model/exemple/exemple2';

function App() {
 
  return (
    <div className="App">
      <WikiComponent content={exemplePageTropidophorus}/>
    </div>
  );
}

export default App;
