import './App.css';
import TableOfContent from './components/table-of-content';
import { exemplePageTropidophorus } from './exemple';

function App() {
  return (
    <div className="App">
      <TableOfContent toc={{numerated:false}} contenu={{value:exemplePageTropidophorus.subjects[0].tableOfContent?.value||[]}}></TableOfContent>
    </div>
  );
}

export default App;
