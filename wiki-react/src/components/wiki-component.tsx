import { Navigate, Route, Routes} from 'react-router-dom'
import { SubjectContent, WikiContent } from '../model/kernel/models/content'
import NavBarComponent from './nav-bar-component'
import SubjectComponent from './subject-component'

export default function WikiComponent({content}:{content:WikiContent}) {

  return (
    <div className='wiki'>
      {content.navBar?<NavBarComponent content={content.navBar}/>:undefined}
      <Routes>
        <Route path="/" element={<Navigate to={content.subjects[0].url}></Navigate>}></Route>
        {content.subjects.map((subject:SubjectContent,index:number)=>{console.log(subject.url);return <Route key={index} path={subject.url} element={<SubjectComponent content={subject}/>}/>})}
      </Routes>
    </div>
  )
}
