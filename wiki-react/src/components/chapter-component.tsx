import { ChapterContent, TextContent} from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function ChapterComponent({content}:{content:ChapterContent}) {
  return (
    <div className='chapter'>
        <h2 className='title'>{content.title}</h2>
        {content.chapterElementContent.map((elt)=>{
            if(elt instanceof ChapterContent){
                return <ChapterComponent content={elt}></ChapterComponent>
            }
            else if(elt instanceof TextContent){
                return <TextComponent content={elt}></TextComponent>
            }
            return undefined;
        })}
    </div>
  )
}
