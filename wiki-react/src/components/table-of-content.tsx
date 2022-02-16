import React from 'react'
import { exemplePageTropidophorus } from '../exemple';

export default function TableOfContent() {
    //const CustomList = toc.numbered?"ol":"ul";

    const test = exemplePageTropidophorus;
    console.log(test.subjects)

    return (
       <div>test</div>
        // <CustomList>{toc.elements.map((elt)=>(<li><a href={""}>{elt.id}</a></li>))}</CustomList>
    )
}


