import { SummaryContent } from '../model/kernel/models/content'
import {default as SummaryStyle} from "../model/kernel/models/summary"

export default function SummaryComponent({summary, content}:{summary:SummaryStyle, content:SummaryContent}) {
  return (
    <div>
        <p dangerouslySetInnerHTML={{__html:content.value.formatedText}}/>
    </div>
  )
}
