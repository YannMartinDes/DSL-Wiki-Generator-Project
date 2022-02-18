import React from 'react'
import { SummaryContent } from '../content'
import {default as SummaryStyle} from "project/src/kernel/models/summary"

export default function Summary({summary, content}:{summary:SummaryStyle, content:SummaryContent}) {
  return (
    <div>
        <p>
            {content.value.text}
        </p>
    </div>
  )
}
