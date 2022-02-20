import {InfoBoxContent} from '../model/kernel/models/content'
import WikiElementComponent from './wiki-element-component'

export default function InfoBoxComponent({content}:{content:InfoBoxContent}) {
  return (
    <div className='infoBox'>
        {content.content.map(wikiElement => <WikiElementComponent content={wikiElement}/>)}
    </div>
  )
}
