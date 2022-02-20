import TableOfContent from './table-of-content-component'

import Summary from './summary-component'
import ChapterComponent from './chapter-component'
import { SubjectContent } from '../model/kernel/models/content'

export default function SubjectComponent({content}:{content:SubjectContent}) {
  return (
    <div className='subject'>
      <h1 className='title'>{content.subject}</h1>
      {content.summary?<Summary content={content.summary}/>:undefined}
      {content.tableOfContent?<TableOfContent content={content.tableOfContent} />:undefined}
      {content.chapters?.map((chapter) =>{return <ChapterComponent content={chapter}/>})}
    </div>
  )
}
