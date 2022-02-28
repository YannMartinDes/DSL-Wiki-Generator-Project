import { Color } from "../kernel/models/enum/color.enum";
import { UnitySize } from "../kernel/models/enum/unity-font-size.enum";
import { FontStyle } from "../kernel/models/enum/font-style.enum";
import { FontWeight } from "../kernel/models/enum/font-weight.enum";
import { TextAlignment } from "../kernel/models/enum/text-align.enum";
import { TextTransform } from "../kernel/models/enum/text-transform.enum";
import WikiTextStyle from "../kernel/models/style/wiki-text-style";
import { TextDecoration } from "../kernel/models/enum/text-decoration.enum";

export class TextStyleBuilder<parentType> {

    private caps?:TextTransform;
    private textAlign?:TextAlignment;
    private bold?:FontWeight;
    private italic?:FontStyle;
    private underline?:TextDecoration;
    private fontColor?:string | Color;
    private fontSize?:string;
    private police?:string;

    private parentBuilder:parentType;

    constructor (parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Used to modify the capitalization of the text
     * @param caps the capitalization's choice like capitalize, uppercase, lowercase, etc. (Default : capitalize)
     * @returns this builder
     */
    capitalizedText(caps?:TextTransform){
        if(!caps) caps = TextTransform.CAPITALIZE;

        this.caps = caps;
        return this;
    }

    /**
     * Used to edit the weight of the font
     * @param bold normal/bold/bolder/lighter (default : bold)
     * @returns this builder
     */
    putInBold(bold?:FontWeight){
        if(!bold) bold = FontWeight.BOLD;

        this.bold = bold;
        return this;
    }
    /**
     * Used to edit the inclination of the text
     * @param italic normal, italic, oblique
     * @returns this builder
     */
    italicize(italic?:FontStyle){
        if(!italic) italic = FontStyle.ITALIC;

        this.italic = italic;
        return this;
    }

    /**
     * Used to set a police
     * @param police the police's name, can add multiple separated by commas, use first if possible the ones following
     * @returns this builder
     */
    setPolice(police:string){
        this.police = police;
        return this;
    }

    /**
     * Used to edit the size of the font
     * @param size the font size
     * @param unit unit of the font size (point by default)
     * @returns this builder
     */
    setFontSize(size:number,unit?:UnitySize){
        if(!unit) unit = UnitySize.POINT;

        this.fontSize = size + unit;
        return this;
    }

    /**
     * Used to edit the font color
     * @param color the font color (hexadecimal code accepted)
     * @returns this builder
     */
    setFontColor(color:string | Color){
        this.fontColor = color;
        return this;
    }

    /**
     * Used to underline the text
     * @param underline underline style (default : underline)
     * @returns this builder
     */
    underlined(underline?:TextDecoration){
        if(!underline) underline = TextDecoration.UNDERLINE;

        this.underline = underline;
        return this;
    }

    /**
     * Used to center the text
     * @returns this builder
     */
    centerText(){
        this.textAlign = TextAlignment.CENTER;
        return this;
    }

    /**
     * Used to edit the text alignment
     * @param align the text alignment
     * @returns this builder
     */
    setTextAlign(align:TextAlignment){
        this.textAlign = align;
        return this;
    }

    /**
     * Used to return to the parent builder
     * @returns the parent builder
     */
    endTextEdit():parentType{
        return this.parentBuilder;
    }

    createModel(){
        return new WikiTextStyle({
            caps:this.caps,
            text_alignment:this.textAlign,
            bold:this.bold,
            italic:this.italic,
            font_color:this.fontColor,
            font_size:this.fontSize,
            underline:this.underline,
            police:this.police
        });
    }

}
