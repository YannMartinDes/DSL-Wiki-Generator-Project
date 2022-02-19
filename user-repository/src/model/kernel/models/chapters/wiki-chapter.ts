import WikiTextStyle from "../style/wiki-text-style";
import WikiBlockStyle from "../style/wiki-block-style";
import WikiWikiElementStyle from "../elements/wiki-element";
import WikiGallery from "./wiki-gallery";
import WikiRelatedSubject from "./wiki-related-subject";
import WikiReferences from "./wiki-references";
import WikiBibliography from "./wiki-bibliography";
import WikiClassicChapter from "./wiki-classic-chapter";

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