import { TextContent } from "../model/kernel/models/content"

export default function TextComponent({content}:{content:TextContent}) {
  return (
    <p className='text' dangerouslySetInnerHTML={{__html:content.formatedText}}></p>
  )
}
