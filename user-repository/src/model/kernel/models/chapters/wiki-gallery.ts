
import WikiElementStyle from "../elements/wiki-element";
import WikiBlockStyle from "../style/wiki-block-style";
import { WikiTitleStyle } from "../style/wiki-title-style";

export default class WikiGallery{
    titleStyle?:WikiTitleStyle
    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle

    constructor({title, content, block}:
                    {title?:WikiTitleStyle, content?:WikiElementStyle, block?:WikiBlockStyle}){
        this.titleStyle = title;
        this.contentStyle = content;
        this.blockStyle = block;
    }
}
