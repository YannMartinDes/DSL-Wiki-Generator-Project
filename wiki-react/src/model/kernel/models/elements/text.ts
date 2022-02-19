import TextStyle from "../style/textStyle";

export default class Text{
    bold?:TextStyle
    italic?:TextStyle
    link?:TextStyle
    basic?:TextStyle

    constructor({basic, bold, italic, link}:{basic?:TextStyle, bold?:TextStyle, italic?:TextStyle, link?:TextStyle}) {
        this.bold = bold;
        this.italic = italic;
        this.link = link;
        this.basic = basic;
    }
}