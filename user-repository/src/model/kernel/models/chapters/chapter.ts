import WikiTextStyle from "../style/textStyle";
import WikiBlockStyle from "../style/blockStyle";
import WikiWikiElementStyle from "../elements/wiki-element-style";
import WikiGallery from "./gallery";
import WikiRelatedSubject from "./relatedSubject";
import WikiReferences from "./references";
import WikiBibliography from "./bibliography";
import WikiClassicChapter from "./classic-chapter";

export default class WikiChapter{
    subChapter?:WikiChapter;

    contentStyle?:WikiWikiElementStyle;
    blockStyle?:WikiBlockStyle;
    titleStyle?:WikiTextStyle;

    gallery?:WikiGallery;
    relatedSubject?:WikiRelatedSubject;
    references?:WikiReferences;
    bibliography?:WikiBibliography;
    classic?:WikiClassicChapter;

}