import './App.css';
import ClassicChapter from './components/classic-chapter';
import Subject from './components/subject';
import TableOfContent from './components/table-of-content';
import { ChapterTypeContent, ClassicChapterContent, SubjectContent, TOCContent, WikiElementTypeContent } from './content';
import { exemplePageTropidophorus } from './exemple';

function App() {

  const chapterTest:ClassicChapterContent = {title:"TestTitleChapter",subChapters:[],type:ChapterTypeContent.CLASSIC, value:{type:WikiElementTypeContent.TEXT,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}}
  const tableOfContentTest:TOCContent = {value:exemplePageTropidophorus.subjects[0].tableOfContent?.value||[]}
  const subjectTest:SubjectContent = {tableOfContent:tableOfContentTest, chapters:[chapterTest, chapterTest], subject:"SUBJECT TEST"}

  return (
    <div className="App">
      <TableOfContent toc={{numerated:false}} content={tableOfContentTest}></TableOfContent>
      <ClassicChapter classicChapter={{}} content={chapterTest}/>
      <Subject subject={{}} content={subjectTest}/>
    </div>
  );
}

export default App;
