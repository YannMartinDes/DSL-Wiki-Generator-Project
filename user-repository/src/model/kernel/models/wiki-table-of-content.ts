import WikiElementStyle from "./elements/wiki-element";
import WikiBlockStyle from "./style/wiki-block-style";

export default class WikiTableOfContent {
    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle
    numerated=true;
}