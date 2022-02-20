import { RelatedSubjectContent} from '../model/kernel/models/content'
import WikiElementComponent from './wiki-element-component'

export default function RelatedSubjectComponent({content}:{content:RelatedSubjectContent}) {
  return (
    <div className='relatedSubject'>
        <h2 className='title'>Related Subject</h2>
        
        <WikiElementComponent content={content.content}/>
    </div>
  )
}
