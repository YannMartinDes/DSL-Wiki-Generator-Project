import Wiki from "../model/kernel/models/wiki"
import { SubjectContent } from '../model/kernel/models/content'
import SubjectComponent from './subject-component'

export default function WikiComponent({wiki}:{wiki:Wiki}) {

  return (
    <div className='wiki-container'>
      {wiki.content.subjects.map((subject:SubjectContent)=>{return <SubjectComponent subject={{}} content={subject}/>})}
    </div>
  )
}
