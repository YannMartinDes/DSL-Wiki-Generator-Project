import { SummaryContent } from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function SummaryComponent({content}:{content:SummaryContent}) {
  return (
    <div className='summary'>
        <TextComponent content={content.content} />
    </div>
  )
}
