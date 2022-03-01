import WikiElementStyle from "./elements/wiki-element-style";
import WikiBlockStyle from "./style/wiki-block-style";
import WikiTextStyle from "./style/wiki-text-style";
import { WikiTitleStyle } from "./style/wiki-title-style";

export default class WikiTableOfContent {
    contentStyle?:WikiElementStyle
    titleStyle?:WikiTitleStyle
    blockStyle?:WikiBlockStyle

    constructor({content,title,block}:
        {content?:WikiElementStyle, title?:WikiTitleStyle, block?:WikiBlockStyle}){
        this.contentStyle =content;
        this.titleStyle = title;
        this.blockStyle = block;
    }
}