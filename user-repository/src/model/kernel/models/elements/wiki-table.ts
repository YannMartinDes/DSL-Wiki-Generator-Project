import {AlignContent} from "../enum/align-content.enum";
import { Border } from '../enum/border.enum';
import { Color } from "../enum/color.enum";

export default class WikiTableStyle{
    border?:Border
    alignment?:AlignContent
    size?:string
    backgroundColor?:Color
    color?:Color
    //TODO : element de style pour un tableau?

    constructor({border,alignment,size,backgroundColor,color} :
                    {border?:Border, alignment?:AlignContent,size?:string,backgroundColor?:Color,color?:Color}) {
        this.border = border;
        this.alignment = alignment;
        this.size=size;
        this.backgroundColor = backgroundColor;
        this.color = color;

    }
}
