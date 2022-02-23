import { WikiContent } from "./content";
import { DisplaySize } from "./display-size";
import WikiElementStyle from "./elements/wiki-element";
import WikiBlockStyle from "./style/wiki-block-style";
import WikiNavBar from "./wiki-nav-bar";
import WikiSubject from "./wiki-subject";

export default class Wiki {
    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle
    subject?:WikiSubject
    navBar?:WikiNavBar
    displaySize:DisplaySize<Wiki>[]=[]
    hoverStyle?:Wiki

    constructor({content, subject, block, navBar, hover}:
        {content?:WikiElementStyle, subject?:WikiSubject, navBar?:WikiNavBar, block?:WikiBlockStyle, hover?:Wiki}){
        this.contentStyle =content;
        this.subject = subject;
        this.blockStyle = block;
        this.navBar = navBar;
        this.hoverStyle = hover;
    }
}