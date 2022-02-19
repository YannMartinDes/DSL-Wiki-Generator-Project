import { TextContent } from "../model/kernel/models/content"
import WikiText from "../model/kernel/models/elements/text"

export default function TextComponent({textFormated, content}:{textFormated?:WikiText, content:TextContent}) {
  return (
    <p className='text' dangerouslySetInnerHTML={{__html:content.formatedText}}></p>
  )
}
