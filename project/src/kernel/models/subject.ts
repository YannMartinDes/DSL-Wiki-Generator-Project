import BlockStyle from "../../old/models/style/blockStyle";
import Bibliography from "./chapters/bibliography";
import Chapter from "./chapters/chapter";
import Gallery from "./chapters/gallery";
import References from "./chapters/references";
import RelatedSubject from "./chapters/relatedSubject";
import WikiElementStyle from "./elements/wiki-element-style";
import InfoBox from "./infoBox";
import Summary from "./summary";
import TableOfContent from "./tableOfContent";

export default class Subject{

    Summary?:Summary
    tableOfContent?:TableOfContent
    infoBox?:InfoBox
    chapter?:Chapter

    childStyle?:WikiElementStyle
    blockStyle?:BlockStyle
    
}