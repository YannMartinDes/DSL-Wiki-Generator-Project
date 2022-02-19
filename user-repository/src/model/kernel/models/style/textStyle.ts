export default class WikiTextStyle {
    caps?:string
    text_alignment?:string
    bold?:boolean
    italic?:boolean
    font_color?:string
    font_size?:number
    underline?:boolean
    police?:string

    constructor({caps, text_alignment, bold, italic, font_color, font_size, underline, police}:
        {caps?:string, text_alignment?:string, bold?:boolean, italic?:boolean, font_color?:string, font_size?:number, underline?:boolean, police?:string}) {
        this.caps = caps;
        this.text_alignment = text_alignment;
        this.bold = bold;
        this.italic = italic;
        this.font_color = font_color;
        this.font_size = font_size;
        this.underline = underline;
        this.police = police;
    }
}