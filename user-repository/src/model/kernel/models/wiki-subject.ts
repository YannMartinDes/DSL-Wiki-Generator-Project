import WikiChapter from "./chapters/wiki-chapter";
import WikiElementStyle from "./elements/wiki-element";
import WikiInfoBox from "./wiki-info-box";
import WikiBlockStyle from "./style/wiki-block-style";
import WikiSummary from "./wiki-summary";
import WikiTableOfContent from "./wiki-table-of-content";
import WikiTextStyle from "./style/wiki-text-style";

export default class WikiSubject{

    summary?:WikiSummary
    tableOfContent?:WikiTableOfContent
    infoBox?:WikiInfoBox
    chapter?:WikiChapter

    title?:WikiTextStyle
    contentStyle?:WikiElementStyle
    blockStyle?:WikiBlockStyle
    
    constructor({title, summary, tableOfContent, infoBox, chapter, content, block}
        :{title?:WikiTextStyle, summary?:WikiSummary, tableOfContent?:WikiTableOfContent, infoBox?:WikiInfoBox, chapter?:WikiChapter
        content?:WikiElementStyle, block?:WikiBlockStyle}){
        this.title = title;
        this.summary = summary;
        this.tableOfContent =tableOfContent;
        this.infoBox = infoBox;
        this.chapter = chapter;
        this.contentStyle =content;
        this.blockStyle = block;
    }
}