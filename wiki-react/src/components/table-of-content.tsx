import React from 'react'
import {default as ToC} from "project/src/kernel/models/tableOfContent"

export default function TableOfContent({toc}:{toc:ToC}) {
    const CustomList = toc.numbered?"ol":"ul";

    return (
        <CustomList>{toc.elements.map((elt)=>(<li><a href={""}>{elt.id}</a></li>))}</CustomList>
    )
}


