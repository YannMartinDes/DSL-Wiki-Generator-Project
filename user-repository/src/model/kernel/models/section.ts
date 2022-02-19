import WikiTextStyle from "./style/textStyle";
import WikiBlockStyle from "./style/blockStyle";
import WikiElementStyle from "./elements/wiki-element-style";

export default class WikiSection{

    contentStyle?:WikiElementStyle

    blockStyle?:WikiBlockStyle
    title?:string
    titleStyle?:WikiTextStyle

    
}