import TextStyle from "./style/textStyle";
import BlockStyle from "./style/blockStyle";
import WikiElementStyle from "./elements/wiki-element-style";

export default class Section{

    contentStyle?:WikiElementStyle

    blockStyle?:BlockStyle
    title?:string
    titleStyle?:TextStyle

    
}