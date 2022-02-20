import { AlignContent } from "../enum/align-content.enum"

export default class WikiBlockStyle {
    margin?:string
    padding?:string
    border?:string
    background?:string
    alignment?:AlignContent
    
    constructor({margin, padding, border, background, alignment}:
        {margin?:string, padding?:string, border?:string, background?:string, alignment?:AlignContent}) {
        this.margin = margin;
        this.padding = padding;
        this.border = border;
        this.background = background;
        this.alignment = alignment;
    }
}