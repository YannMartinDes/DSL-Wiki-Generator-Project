import {NavBarContent, TOCContent} from "../model/kernel/models/content"


export default function NavBarComponent({content}:{content:NavBarContent}) {

    return (
        <div className="navBar">
            <ol>
                {content.navBar.map((elt)=>
                    (<li className="text">
                        <a href={elt.url}>{elt.content}</a>
                    </li>))}
            </ol>
        </div>

    )
}


