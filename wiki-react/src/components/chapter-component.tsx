import { ChapterContent, ClassiqueChapterContent, GalleryChapterContent} from '../model/kernel/models/content'
import ClassicChapterComponent from './classic-chapter-component'
import GalleryComponent from './gallery-component'

export default function ChapterComponent({content}:{content:ChapterContent}) {
  if(content instanceof ClassiqueChapterContent){
    return (
      <div className='chapter'>
        <ClassicChapterComponent content={content}/>
      </div>
    )      
  }
  else if(content instanceof GalleryChapterContent){
    return (
      <div className='chapter'>
        <GalleryComponent content={content}/>
      </div>
    )
  }
  else{
    return (
      null
    )
  }
}
