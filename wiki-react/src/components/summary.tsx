import React from 'react'
import { SummaryContent } from '../model/kernel/models/content'
import {default as SummaryStyle} from "../model/kernel/models/summary"

export default function Summary({summary, content}:{summary:SummaryStyle, content:SummaryContent}) {
  return (
    <div>
        <p>
            {content.value.text}
        </p>
    </div>
  )
}
