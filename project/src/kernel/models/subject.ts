import Bibliography from "./chapters/bibliography";
import Chapter from "./chapters/chapter";
import Gallery from "./chapters/gallery";
import References from "./chapters/references";
import RelatedSubject from "./chapters/relatedSubject";
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