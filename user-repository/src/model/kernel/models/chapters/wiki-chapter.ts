import WikiTextStyle from "../style/wiki-text-style";
import WikiBlockStyle from "../style/wiki-block-style";
import WikiGallery from "./wiki-gallery";
import WikiBibliography from "./wiki-bibliography";
import WikiClassicChapter from "./wiki-classic-chapter";
import WikiElement from "../elements/wiki-element";

export default class WikiChapter{
    subChapter?:WikiChapter;

    contentStyle?:WikiElement;
    blockStyle?:WikiBlockStyle;
    titleStyle?:WikiTextStyle;

    gallery?:WikiGallery;
    bibliography?:WikiBibliography;
    classicChapter?:WikiClassicChapter;

    constructor({subChapter, content, block, title, gallery, bibliography, classicChapter}:
        {subChapter?:WikiChapter, content?:WikiElement, block?:WikiBlockStyle, title?:WikiTextStyle,
        gallery?:WikiGallery, bibliography?:WikiBibliography, classicChapter?:WikiClassicChapter}){
        this.subChapter = subChapter;
        this.blockStyle = block;
        this.titleStyle = title;
        this.gallery = gallery;
        this.contentStyle =content;
        this.bibliography =bibliography;
        this.classicChapter = classicChapter;
    }
}