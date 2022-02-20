import { TextContent, WikiElementContent } from '../model/kernel/models/content'
import TextComponent from './text-component'

export default function WikiElementComponent({content}:{content:WikiElementContent}) {
    if(content instanceof TextContent){
        return <TextComponent content={content}></TextComponent>
    }
    else{
        return null
    }

}
