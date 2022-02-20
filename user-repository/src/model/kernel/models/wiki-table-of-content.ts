import WikiElementStyle from "./elements/wiki-element";
import WikiBlockStyle from "./style/wiki-block-style";
import WikiTextStyle from "./style/wiki-text-style";

export default class WikiTableOfContent {
    contentStyle?:WikiElementStyle
    titleStyle?:WikiTextStyle
    blockStyle?:WikiBlockStyle

    constructor({content,title,block}:
        {content?:WikiElementStyle, title?:WikiTextStyle, block?:WikiBlockStyle}){
        this.contentStyle =content;
        this.titleStyle = title;
        this.blockStyle = block;
    }
}