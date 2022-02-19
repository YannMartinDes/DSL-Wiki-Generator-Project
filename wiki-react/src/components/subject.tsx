import React from 'react'
import { ChapterTypeContent, SubjectContent, WikiElementTypeContent } from '../model/kernel/models/content'
import {default as SjtStyle} from "../model/kernel/models/subject"
import TableOfContent from './table-of-content'
import ClassicChapter from './classic-chapter'
import Summary from './summary'

export default function Subject({subject, content}:{subject:SjtStyle, content:SubjectContent}) {
  return (
    <div>
      <h1>{content.subject}</h1>
      <Summary summary={{}} content={content.summary!}/>
      <TableOfContent toc={{numerated:true}} content={content.tableOfContent!} />
      {content.chapters?.map((chapter) =>{return <ClassicChapter classicChapter={{}} 
        content={{type:ChapterTypeContent.CLASSIC, subChapters:[], title:chapter.title, value:{text:"TEST TEXT", type:WikiElementTypeContent.TEXT}}
      }/>})}
    </div>
  )
}
