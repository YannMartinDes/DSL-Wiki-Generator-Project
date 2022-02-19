import WikiTextStyle from "../style/textStyle";

export default class WikiText{
    bold?:WikiTextStyle
    italic?:WikiTextStyle
    link?:WikiTextStyle
    basic?:WikiTextStyle

    constructor({basic, bold, italic, link}:{basic?:WikiTextStyle, bold?:WikiTextStyle, italic?:WikiTextStyle, link?:WikiTextStyle}) {
        this.bold = bold;
        this.italic = italic;
        this.link = link;
        this.basic = basic;
    }
}