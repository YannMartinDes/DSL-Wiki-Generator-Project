import {default as ToC} from "project/src/kernel/models/tableOfContent"
import {TOCContent} from "project/src/kernel/models/content"


export default function TableOfContent({toc,contenu}:{toc:ToC,contenu:TOCContent}) {
    
    const CustomList = toc.numerated?"ol":"ul";
    return (
        <CustomList>{contenu.value.map((elt)=>(<li><a href={elt.url}>{elt.content}</a></li>))}</CustomList>
    )
}


