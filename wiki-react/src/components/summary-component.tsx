import { SummaryContent } from '../model/kernel/models/content'
import WikiSummary from '../model/kernel/models/summary'

export default function SummaryComponent({summary, content}:{summary:WikiSummary, content:SummaryContent}) {
  return (
    <div>
        <p dangerouslySetInnerHTML={{__html:content.value.formatedText}}/>
    </div>
  )
}
