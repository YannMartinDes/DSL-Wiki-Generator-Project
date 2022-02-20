import { SubjectContent, WikiContent } from '../model/kernel/models/content'
import NavBarComponent from './nav-bar-component'
import SubjectComponent from './subject-component'

export default function WikiComponent({content}:{content:WikiContent}) {

  return (
    <div className='wiki'>
      {content.navBar?<NavBarComponent content={content.navBar}/>:undefined}
      {content.subjects.map((subject:SubjectContent)=>{return <SubjectComponent content={subject}/>})}
    </div>
  )
}
