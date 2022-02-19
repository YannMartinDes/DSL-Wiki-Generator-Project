import Chapter from "./chapters/chapter";
import WikiElementStyle from "./elements/wiki-element-style";
import InfoBox from "./infoBox";
import BlockStyle from "./style/blockStyle";
import Summary from "./summary";
import TableOfContent from "./tableOfContent";

export default class Subject{

    Summary?:Summary
    tableOfContent?:TableOfContent
    infoBox?:InfoBox
    chapter?:Chapter

    contentStyle?:WikiElementStyle
    blockStyle?:BlockStyle
    
}