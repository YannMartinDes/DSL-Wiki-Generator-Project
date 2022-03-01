import { ButtonContent, ImageContent, TableContent, TextContent, WikiElementContent } from '../model/kernel/models/content'
import ButtonComponent from './button-component'
import ImageComponent from './image-component'
import TableComponent from './table-component'
import TextComponent from './text-component'

export default function WikiElementComponent({content}:{content:WikiElementContent}) {
    if(content instanceof TextContent){
        return <TextComponent content={content}/>
    }
    if(content instanceof ImageContent){
        return <ImageComponent content={content}/>
    }
    if(content instanceof TableContent){
        return <TableComponent table={content}/>
    }
    if(content instanceof ButtonContent){
        return <ButtonComponent content={content}/>
    }
    else{
        return null
    }

}
