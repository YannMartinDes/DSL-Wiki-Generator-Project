import { ChapterContent, ClassiqueChapterContent} from '../model/kernel/models/content'
import ClassicChapterComponent from './classic-chapter-component'

export default function ChapterComponent({content}:{content:ChapterContent}) {
  if(content instanceof ClassiqueChapterContent){
    return (
      <div className='chapter'>
        <ClassicChapterComponent content={content}/>
      </div>
    )      
  }
  return (
    <div className='chapter'>
      {/* TODO */}
    </div>
  )
}
