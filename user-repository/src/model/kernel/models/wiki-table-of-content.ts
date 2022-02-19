import WikiElementStyle from "./elements/wiki-element";
import WikiBlockStyle from "./style/wiki-block-style";
import WikiTextStyle from "./style/wiki-text-style";

export default class WikiTableOfContent {
    contentStyle?:WikiElementStyle
    titleStyle?:WikiTextStyle
    blockStyle?:WikiBlockStyle
    numerated?:boolean

    constructor({content,title,block,numerated}:
        {content?:WikiElementStyle, title?:WikiTextStyle, block?:WikiBlockStyle, numerated?:boolean}){
        this.contentStyle =content;
        this.titleStyle = title;
        this.blockStyle = block;
        this.numerated = numerated;
    }
}