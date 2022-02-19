import { SubjectContent } from '../model/kernel/models/content'
import {default as SjtStyle} from "../model/kernel/models/subject"
import TableOfContent from './table-of-content-component'
import Summary from './summary-component'
import ChapterComponent from './chapter-component'

export default function SubjectComponent({subject, content}:{subject:SjtStyle, content:SubjectContent}) {
  return (
    <div>
      <h1>{content.subject}</h1>
      {content.summary?<Summary summary={{}} content={content.summary}/>:undefined}
      {content.tableOfContent?<TableOfContent toc={{numerated:true}} content={content.tableOfContent} />:undefined }
      {content.chapters?.map((chapter) =>{return <ChapterComponent chapterStyle={subject.chapter} content={chapter}/>})}
    </div>
  )
}
