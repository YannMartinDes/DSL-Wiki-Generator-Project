import WikiTextStyle from "../style/wiki-text-style";
import WikiBlockStyle from "../style/wiki-block-style";
import WikiGallery from "./wiki-gallery";
import WikiRelatedSubject from "./wiki-related-subject";
import WikiReferences from "./wiki-references";
import WikiBibliography from "./wiki-bibliography";
import WikiClassicChapter from "./wiki-classic-chapter";
import WikiElement from "../elements/wiki-element";

export default class WikiChapter{
    subChapter?:WikiChapter;

    contentStyle?:WikiElement;
    blockStyle?:WikiBlockStyle;
    titleStyle?:WikiTextStyle;

    gallery?:WikiGallery;
    relatedSubject?:WikiRelatedSubject;
    references?:WikiReferences;
    bibliography?:WikiBibliography;
    classicChapter?:WikiClassicChapter;

    constructor({subChapter, content, block, title, gallery, relatedSubject, references, bibliography, classicChapter}:
        {subChapter?:WikiChapter, content?:WikiElement, block?:WikiBlockStyle, title?:WikiTextStyle,
        gallery?:WikiGallery, relatedSubject?:WikiRelatedSubject, references?:WikiReferences, bibliography?:WikiBibliography, classicChapter?:WikiClassicChapter}){
        this.subChapter = subChapter;
        this.blockStyle = block;
        this.titleStyle = title;
        this.gallery = gallery;
        this.contentStyle =content;
        this.relatedSubject =relatedSubject;
        this.references =references;
        this.bibliography =bibliography;
        this.classicChapter = classicChapter;
    }
}