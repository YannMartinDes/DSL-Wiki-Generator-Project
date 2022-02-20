import { SubjectContent, WikiContent } from '../model/kernel/models/content'
import SubjectComponent from './subject-component'

export default function WikiComponent({content}:{content:WikiContent}) {

  return (
    <div className='wiki'>
      {content.subjects.map((subject:SubjectContent)=>{return <SubjectComponent content={subject}/>})}
    </div>
  )
}
