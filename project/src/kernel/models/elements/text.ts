import TextStyle from "../style/textStyle";
import WikiElement from "./wikiElement";

export default class Text extends WikiElement{
    bold:TextStyle
    italic:TextStyle
    link:TextStyle
    basic:TextStyle

    constructor(id:string, basic:TextStyle, bold:TextStyle, italic:TextStyle, link:TextStyle) {
        super(id);
        this.bold = bold;
        this.italic = italic;
        this.link = link;
        this.basic = basic;
    }
}