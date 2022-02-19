import { WikiContent } from "./content";
import WikiElementStyle from "./elements/wiki-element";
import WikiBlockStyle from "./style/wiki-block-style";
import WikiNavBar from "./wiki-nav-bar";
import WikiSubject from "./wiki-subject";

export default class Wiki {
    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle
    subject?:WikiSubject
    navBar?:WikiNavBar

    constructor({content, subject, block, navBar}:
        {content?:WikiElementStyle, subject?:WikiSubject, navBar?:WikiNavBar, block?:WikiBlockStyle}){
        this.contentStyle =content;
        this.subject = subject;
        this.blockStyle = block;
        this.navBar = navBar;
    }
}