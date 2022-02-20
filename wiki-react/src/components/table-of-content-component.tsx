import {TOCContent} from "../model/kernel/models/content"


export default function TableOfContentComponent({content}:{content:TOCContent}) {
    
    return (      
        <div className="tableOfContent">
            <h2 className="title">Table des matières</h2>
            <ol>
                {content.toc.map((elt)=>
                    (<li className="text">
                        <a href={elt.url}>{elt.content}</a>
                    </li>))}
            </ol>
        </div>  
        
    )
}


