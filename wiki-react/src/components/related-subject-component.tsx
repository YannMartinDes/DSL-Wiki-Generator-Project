import {GalleryContent, InfoBox, RelatedSubjectContent} from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function RelatedSubjectComponent({content}:{content:RelatedSubjectContent}) {
  return (
    <div className='relatedSubject'>
        <h2 className='title'>Related Subject</h2>
        <TextComponent content={content.textContent}/>
    </div>
  )
}
