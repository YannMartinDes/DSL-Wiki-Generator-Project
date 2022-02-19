import WikiChapter from '../model/kernel/models/chapters/chapter'
import { ChapterContent, TextContent} from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function ChapterComponent({chapterStyle,content}:{chapterStyle?:WikiChapter,content:ChapterContent}) {
  return (
    <div className='chapter-style'>
        <h2>{content.title}</h2>
        {content.chapterElementContent.map((elt)=>{
            if(elt instanceof ChapterContent){
                return <ChapterComponent content={elt} chapterStyle={chapterStyle?.subChapter}></ChapterComponent>
            }
            else if(elt instanceof TextContent){
                return <TextComponent content={elt} textFormated={chapterStyle?.contentStyle?.text}></TextComponent>
            }
        })}
    </div>
  )
}
