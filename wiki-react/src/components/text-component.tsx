import { TextContent } from "../model/kernel/models/content"
import {default as TextElementStyle} from "../model/kernel/models/elements/text"

export default function TextComponent({textFormated, content}:{textFormated?:TextElementStyle, content:TextContent}) {
  return (
    <p className='text' dangerouslySetInnerHTML={{__html:content.formatedText}}></p>
  )
}
