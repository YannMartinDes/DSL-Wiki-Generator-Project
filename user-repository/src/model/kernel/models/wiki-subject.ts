import WikiChapter from "./chapters/wiki-chapter";
import WikiElementStyle from "./elements/wiki-element";
import WikiInfoBox from "./wiki-info-box";
import WikiBlockStyle from "./style/wiki-block-style";
import WikiSummary from "./wiki-summary";
import WikiTableOfContent from "./wiki-table-of-content";

export default class WikiSubject{

    Summary?:WikiSummary
    tableOfContent?:WikiTableOfContent
    infoBox?:WikiInfoBox
    chapter?:WikiChapter

    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle
    
}