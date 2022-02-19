import { SummaryContent } from '../model/kernel/models/content'
import WikiSummary from '../model/kernel/models/summary'
import TextComponent from './text-component'

export default function SummaryComponent({summary, content}:{summary:WikiSummary, content:SummaryContent}) {
  return (
    <div>
        <TextComponent content={content.value} />
    </div>
  )
}
