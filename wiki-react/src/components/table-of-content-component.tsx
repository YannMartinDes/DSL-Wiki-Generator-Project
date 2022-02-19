import {default as ToCStyle} from "../model/kernel/models/tableOfContent"
import {TOCContent} from "../model/kernel/models/content"


export default function TableOfContentComponent({toc,content}:{toc:ToCStyle,content:TOCContent}) {
    
    const CustomList = toc.numerated?"ol":"ul";
    return (
        <CustomList>{content.toc.map((elt)=>(<li><a href={elt.url}>{elt.content}</a></li>))}</CustomList>
    )
}


