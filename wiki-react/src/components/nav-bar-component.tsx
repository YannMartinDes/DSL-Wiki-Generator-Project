import {NavBarContent, TOCContent} from "../model/kernel/models/content"
import WikiElementComponent from "./wiki-element-component"


export default function NavBarComponent({content}:{content:NavBarContent}) {

    return (
        <div className="navBar">
            <ol>
                {content.navBar.map((elt,i)=>
                    (<li key={i} className="text">
                        <a href={elt.url}>{<WikiElementComponent content={elt.content}/>}</a>
                    </li>))}
            </ol>
        </div>
    )
}


