import TextStyle from "../style/textStyle";
import BlockStyle from "../style/blockStyle";
import Section from "../section";
import WikiElementStyle from "../elements/wiki-element-style";
import Gallery from "./gallery";
import RelatedSubject from "./relatedSubject";
import References from "./references";
import Bibliography from "./bibliography";
import ClassicChapter from "./classic-chapter";

export default class Chapter{
    subChapter?:Chapter;

    contentStyle?:WikiElementStyle;
    blockStyle?:BlockStyle;
    titleStyle?:TextStyle;

    gallery?:Gallery;
    relatedSubject?:RelatedSubject;
    references?:References;
    bibliography?:Bibliography;
    classic?:ClassicChapter;
}