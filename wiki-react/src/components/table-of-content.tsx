import {default as ToCStyle} from "../model/kernel/models/tableOfContent"
import {TOCContent} from "../model/kernel/models/content"


export default function TableOfContent({toc,content}:{toc:ToCStyle,content:TOCContent}) {
    
    const CustomList = toc.numerated?"ol":"ul";
    return (
        <CustomList>{content.value.map((elt)=>(<li><a href={elt.url}>{elt.content}</a></li>))}</CustomList>
    )
}


