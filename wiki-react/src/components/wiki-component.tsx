import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { SubjectContent, WikiContent } from '../model/kernel/models/content'
import NavBarComponent from './nav-bar-component'
import SubjectComponent from './subject-component'

export default function WikiComponent({content}:{content:WikiContent}) {
  // const navigate = useNavigate();
  // const location = useLocation()
  // useEffect(()=>{
  //   navigate(content.subjects[0].url)
  //   console.log("navigate to "+content.subjects[0].url)
  //   console.log(location.pathname)
  // },[])

  return (
    <div className='wiki'>
      {content.navBar?<NavBarComponent content={content.navBar}/>:undefined}
      <Routes>
        {content.subjects.map((subject:SubjectContent,index:number)=>{console.log(subject.url);return <Route key={index} path={subject.url} element={<SubjectComponent content={subject}/>}/>})}
      </Routes>
    </div>
  )
}
