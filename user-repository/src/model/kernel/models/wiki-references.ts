import WikiBlockStyle from "./style/wiki-block-style";
import WikiTextStyle from "./style/wiki-text-style";
import WikiElementStyle from "./elements/wiki-element";

export default class WikiReferences{
    titleStyle?:WikiTextStyle
    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle

    constructor({title, content, block}:
                    {title?:WikiTextStyle, content?:WikiElementStyle, block?:WikiBlockStyle}){
        this.titleStyle = title;
        this.contentStyle = content;
        this.blockStyle = block;
    }
}
