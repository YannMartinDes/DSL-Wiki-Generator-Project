import { TextAlignment } from "../kernel/models/enum/text-align.enum";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";
import {AlignContent} from "../kernel/models/enum/align-content.enum";
import WikiImageStyle from "../kernel/models/elements/wiki-image";
import WikiTableStyle from "../kernel/models/elements/wiki-table";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { Border } from "../kernel/models/enum/border.enum";
import { Color } from "../kernel/models/enum/color.enum";
import { UnitySize } from "../kernel/models/enum/unity-font-size.enum";

export class TableStyleBuilder {


    //TODO mettre les bonnes méthodes et renommé pour être homogène ???
    private border?:Border
    private alignment?:AlignContent
    private size?:string
    private backgroundColor?:Color
    private color?:Color
    private parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Used to edit the table border
     * @param border the border type (dotted, dashed, solid, double, outset, none)
     * @returns this builder
     */
    editBorder(border:Border){
        this.border=border;
        return this;
    }
    /**
     * Used to place the content as needed (left, right, center, ...)
     * @param alignment the chosen alignment
     * @returns this builder
     */
    editAlignement(alignment:AlignContent){
        this.alignment=alignment;
        return this;
    }

    /**
     * Used to edit the size of the font
     * @param value the font size
     * @param type unit of the font size (point by default)
     * @returns this builder
     */
    editSize(value : number, type : UnitySize){
        this.size=value+type;
        return this;
    }

    /**
     * Used to add a background color to the table
     * @param color color of the background
     * @returns this builder
     */
    editBackgroundColor(color:Color){
        this.backgroundColor=color;
        return this
    }

    /**
     * Used to edit the font color in the table
     * @param color the font color
     * @returns this builder
     */
    editColor(color:Color){
        this.color=color;
        return this
    }

    /**
     * Used to return to the parent builder
     * @returns the parent builder
     */
    endTableEdit():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel(){

        return new WikiTableStyle({
            border:this.border,
            alignment:this.alignment
        });
    }

}
