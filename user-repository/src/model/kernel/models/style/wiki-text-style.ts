import { Color } from "../enum/color.enum"
import { FontStyle } from "../enum/font-style.enum"
import { FontWeight } from "../enum/font-weight.enum"
import { TextAlignment } from "../enum/text-align.enum"
import { TextTransform } from "../enum/text-transform.enum"

export default class WikiTextStyle {
    caps?:TextTransform
    text_alignment?:TextAlignment
    bold?:FontWeight
    italic?:FontStyle
    font_color?:string | Color
    font_size?:string
    underline?:boolean
    police?:string

    constructor({caps, text_alignment, bold, italic, font_color, font_size, underline, police}:
        {caps?:TextTransform, text_alignment?:TextAlignment, bold?:FontWeight, italic?:FontStyle, font_color?:string | Color, font_size?:string, underline?:boolean, police?:string}) {
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