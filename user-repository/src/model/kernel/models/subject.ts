import WikiChapter from "./chapters/chapter";
import WikiElementStyle from "./elements/wiki-element-style";
import WikiInfoBox from "./infoBox";
import WikiBlockStyle from "./style/blockStyle";
import WikiSummary from "./summary";
import WikiTableOfContent from "./tableOfContent";

export default class Subject{

    Summary?:WikiSummary
    tableOfContent?:WikiTableOfContent
    infoBox?:WikiInfoBox
    chapter?:WikiChapter

    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle
    
}