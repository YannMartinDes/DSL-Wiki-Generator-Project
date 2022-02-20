import {InfoBox} from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function InfoBoxComponent({content}:{content:InfoBox}) {
  return (
    <div className='infoBox'>
        <TextComponent content={content.value} />
    </div>
  )
}
