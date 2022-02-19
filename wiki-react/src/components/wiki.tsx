import React from 'react'
import {default as WikiStyle} from "../model/kernel/models/wiki"
import { SubjectContent, WikiContent } from '../model/kernel/models/content'
import Subject from './subject'

export default function Wiki({wiki, content}:{wiki:WikiStyle, content:WikiContent}) {
  return (
    <div>
      {content.subjects.map((subject:SubjectContent)=>{return <Subject subject={{}} content={subject}/>})}
    </div>
  )
}
