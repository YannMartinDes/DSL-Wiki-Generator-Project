import { ReferencesContent} from '../model/kernel/models/content'
import WikiElementComponent from './wiki-element-component'

export default function ReferencesComponent({content}:{content:ReferencesContent}) {
  return (
    <div className='references'>
        <h2 className='title'>References</h2>
        <WikiElementComponent content={content.content}/>
    </div>
  )
}
