import {GalleryContent, InfoBox, ReferencesContent} from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function ReferencesComponent({content}:{content:ReferencesContent}) {
  return (
    <div className='references'>
        <h2 className='title'>References</h2>
        <TextComponent content={content.textContent}/>
    </div>
  )
}
