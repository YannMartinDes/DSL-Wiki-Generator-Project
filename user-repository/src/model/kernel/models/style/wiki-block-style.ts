import { AlignContent } from "../enum/align-content.enum"
import { Color } from "../enum/color.enum"
import { Display } from "../enum/display.enum"
import { Float } from "../enum/float"

export default class WikiBlockStyle {
    margin?:string
    padding?:string
    border?:string
    borderBot?:string
    borderTop?:string
    borderLeft?:string
    borderRight?:string
    background?:string
    alignment?:AlignContent
    display?:Display
    float?:Float
    columnNumber?:number
    shadowColor?:Color
    height?:string
    width?:string
    borderRadius?:string
    constructor({margin, padding, border, background, alignment, display, float,borderLeft,borderRight,borderTop,borderBot,width,height,shadowColor,columnNumber,borderRadius}:
        {margin?:string, padding?:string, border?:string, background?:string, alignment?:AlignContent, display?:Display, float?:Float,
        borderLeft?:string,borderRight?:string,borderTop?:string,borderBot?:string,width?:string, height?:string,shadowColor?:Color,columnNumber?:number, borderRadius?:string}) {
        this.margin = margin;
        this.padding = padding;
        this.border = border;
        this.background = background;
        this.alignment = alignment;
        this.display = display;
        this.float = float;
        this.borderRight=borderRight;
        this.borderLeft=borderLeft;
        this.borderTop = borderTop;
        this.borderBot = borderBot;
        this.height = height;
        this.width = width;
        this.columnNumber = columnNumber;
        this.shadowColor = shadowColor;
        this.borderRadius = borderRadius;
    }
}