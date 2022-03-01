import WikiElementStyle from "./elements/wiki-element-style";
import WikiBlockStyle from "./style/wiki-block-style";

export default class WikiNavBar {
    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle

    constructor({content, block}:{content?:WikiElementStyle, block?:WikiBlockStyle}){
        this.contentStyle = content;
        this.blockStyle = block;
    }
}
