import WikiTextStyle from "../style/wiki-text-style";
import WikiBlockStyle from "../style/wiki-block-style";
import WikiGallery from "./wiki-gallery";
import WikiClassicChapter from "./wiki-classic-chapter";
import WikiElement from "../elements/wiki-element";
import { WikiTitleStyle } from "../style/wiki-title-style";

export default class WikiChapter{
    subChapter?:WikiChapter;

    contentStyle?:WikiElement;
    blockStyle?:WikiBlockStyle;
    titleStyle?:WikiTitleStyle;

    gallery?:WikiGallery;
    classicChapter?:WikiClassicChapter;

    constructor({subChapter, content, block, title, gallery, classicChapter}:
        {subChapter?:WikiChapter, content?:WikiElement, block?:WikiBlockStyle, title?:WikiTitleStyle,
        gallery?:WikiGallery, classicChapter?:WikiClassicChapter}){
        this.subChapter = subChapter;
        this.blockStyle = block;
        this.titleStyle = title;
        this.gallery = gallery;
        this.contentStyle =content;
        this.classicChapter = classicChapter;
    }
}