import { AlignContent } from "../enum/align-content.enum"
import { Float } from "../enum/float"

export default class WikiBlockStyle {
    margin?:string
    padding?:string
    border?:string
    background?:string
    alignment?:AlignContent
    display?:string
    float?:Float
    
    constructor({margin, padding, border, background, alignment, display, float}:
        {margin?:string, padding?:string, border?:string, background?:string, alignment?:AlignContent, display?:string, float?:Float}) {
        this.margin = margin;
        this.padding = padding;
        this.border = border;
        this.background = background;
        this.alignment = alignment;
        this.display = display;
        this.float = float;
    }
}