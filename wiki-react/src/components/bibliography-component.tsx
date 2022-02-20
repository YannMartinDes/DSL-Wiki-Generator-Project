import {BibliographyContent, GalleryContent, InfoBox} from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function BibliographyComponent({content}:{content:BibliographyContent}) {
  return (
    <div className='bibliography'>
        <h2 className='title'>Bibliography</h2>
        <TextComponent content={content.textContent}/>
    </div>
  )
}
