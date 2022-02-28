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
     * Permet de changer les majuscule du text
     * @param caps Le choix du caps (Defaut tout en majuscule)
     * @returns Le builder
     */
    capitalizedText(caps?:TextTransform){
        if(!caps) caps = TextTransform.CAPITALIZE;

        this.caps = caps;
        return this;
    }

    /**
     * Permet d'editer la largeur de la police
     * @param bold La largeur de la police
     * @returns Le builder
     */
    putInBold(bold?:FontWeight){
        if(!bold) bold = FontWeight.BOLD;

        this.bold = bold;
        return this;
    }
    /**
     * Permet de mettre le text en italic (ou oblique/normal)
     * @param italic Le type de font (Italic par defaut)
     * @returns Le builder
     */
    italicize(italic?:FontStyle){
        if(!italic) italic = FontStyle.ITALIC;

        this.italic = italic;
        return this;
    }

    /**
     * Permet de selectionner lune police
     * @param police Le nom de la police (plusieur peuvent etre ecrite separer par des virgule,
     * la premiere sera selectionner si possible sinon la suivante)
     * @returns Le builder
     */
    setPolice(police:string){
        this.police = police;
        return this;
    }

    /**
     * Permet d'editer la taille de la police
     * @param size La taille
     * @param unit L'unité de la font size
     * @returns Le builder
     */
    setFontSize(size:number,unit?:UnitySize){
        if(!unit) unit = UnitySize.POINT;

        this.fontSize = size + unit;
        return this;
    }

    /**
     * Permet d'editer la couleur du text
     * @param color La couleur de la police (un code #xxxxxx est accepter)
     * @returns Le builder
     */
    setFontColor(color:string | Color){
        this.fontColor = color;
        return this;
    }

    /**
     * Permet de souligner le text (ou d'autre possibilité comme baré)
     * @param underline L'action a effectuer (Souligner par defaut)
     * @returns Le builder
     */
    underlined(underline?:TextDecoration){
        if(!underline) underline = TextDecoration.UNDERLINE;

        this.underline = underline;
        return this;
    }

    /**
     * Permet de centrer le text
     * @returns Le builder
     */
    centerText(){
        this.textAlign = TextAlignment.CENTER;
        return this;
    }

    /**
     * Permet d'editer l'alignement du text
     * @param align L'alignement du text
     * @returns Le builder
     */
    setTextAlign(align:TextAlignment){
        this.textAlign = align;
        return this;
    }

    /**
     * Permet de revenir au builder precedent
     * @returns Le builder parent
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