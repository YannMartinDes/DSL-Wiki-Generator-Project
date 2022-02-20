import { TextAlignment } from "../enum/text-align.enum"

export default class WikiTextStyle {
    caps?:boolean
    text_alignment?:TextAlignment
    bold?:boolean
    italic?:boolean
    font_color?:string
    font_size?:string
    underline?:boolean
    police?:string

    constructor({caps, text_alignment, bold, italic, font_color, font_size, underline, police}:
        {caps?:boolean, text_alignment?:TextAlignment, bold?:boolean, italic?:boolean, font_color?:string, font_size?:string, underline?:boolean, police?:string}) {
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