import './App.css';
import "./generate.css"
import WikiComponent from './components/wiki-component';
import { exemplePageTropidophorus } from './model/exemple/exemple';
import WikiText from './model/kernel/models/elements/text';
import WikiElementStyle from './model/kernel/models/elements/wiki-element-style';
import WikiTextStyle from './model/kernel/models/style/textStyle';
import Wiki from './model/kernel/models/wiki';

function App() {

  // const chapterTest:ClassicChapterContent = {title:"TestTitleChapter",subChapters:[],type:ChapterTypeContent.CLASSIC, value:{type:WikiElementTypeContent.TEXT,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}}
  // const tableOfContentTest:TOCContent = {value:exemplePageTropidophorus.subjects[0].tableOfContent?.value||[]}
  // const summaryTest:SummaryContent = exemplePageTropidophorus.subjects[0].summary!;
  // const subjectTest:SubjectContent = {tableOfContent:tableOfContentTest, summary:summaryTest, chapters:[chapterTest, chapterTest], subject:"SUBJECT TEST"}
  // const wikiTest:WikiContent = {subjects:[subjectTest,subjectTest]}
  const wiki = new Wiki()
  wiki.contentStyle = new WikiElementStyle()
  wiki.contentStyle.text=new WikiText({basic:new WikiTextStyle({font_color:"red"})})
  wiki.content=exemplePageTropidophorus
  return (
    <div className="App">
      {/* <TableOfContentComponent toc={{numerated:false}} content={tableOfContentTest}></TableOfContentComponent>
      <ClassicChapterComponent classicChapter={{}} content={chapterTest}/>
      <SummaryComponent summary={{}} content={summaryTest} />
      <SubjectComponent subject={{}} content={subjectTest}/> */}
      <WikiComponent wiki={wiki}/>
    </div>
  );
}

export default App;
