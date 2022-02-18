import {default as ToCStyle} from "project/src/kernel/models/tableOfContent"
import {TOCContent} from "project/src/kernel/models/content"


export default function TableOfContent({toc,content}:{toc:ToCStyle,content:TOCContent}) {
    
    const CustomList = toc.numerated?"ol":"ul";
    return (
        <CustomList>{content.value.map((elt)=>(<li><a href={elt.url}>{elt.content}</a></li>))}</CustomList>
    )
}


