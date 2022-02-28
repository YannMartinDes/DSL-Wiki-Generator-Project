import { AlignContent } from "../kernel/models/enum/align-content.enum"
import { Border } from "../kernel/models/enum/border.enum"
import { Color } from "../kernel/models/enum/color.enum"
import { Display } from "../kernel/models/enum/display.enum"
import { Float } from "../kernel/models/enum/float"
import { UnitySize } from "../kernel/models/enum/unity-font-size.enum"
import WikiBlockStyle from "../kernel/models/style/wiki-block-style"

export class BlockStyleBuilder<parentType>{

    private border?:string
    private borderTop?:string
    private borderBot?:string
    private borderLeft?:string
    private borderRight?:string
    private backgroundColor?:string
    private alignment?:AlignContent
    private padding?:string
    private margin?:string
    private display?:Display
    private float?:Float
    private shadowColor?:Color
    private columnNumber?:number

    private parentBuilder:parentType

    constructor(parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Permet de mettre un bordure a l'element
     * @param width l'epaiseur de la bordure
     * @param color optionel - la couleur de la bordure (noir par defaut)
     * @param border optionel - Le type de bordeur (SOLID par defaut)
     * @returns le builder
     */
    setBorder(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.border = borderConstructed;
        return this;
    }

    /**
     * Permet de mettre un bordure superieur a l'element
     * @param width l'epaiseur de la bordure
     * @param color optionel - la couleur de la bordure (noir par defaut)
     * @param border optionel - Le type de bordeur (SOLID par defaut)
     * @returns le builder
     */
    setBorderTop(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderTop = borderConstructed;
        return this;
    }

    /**
     * Permet de mettre un bordure inferieur a l'element
     * @param width l'epaiseur de la bordure
     * @param color optionel - la couleur de la bordure (noir par defaut)
     * @param border optionel - Le type de bordeur (SOLID par defaut)
     * @returns le builder
     */
    setBorderBot(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderBot = borderConstructed;
        return this;
    }

    /**
     * Permet de mettre un bordure a gauche de l'element
     * @param width l'epaiseur de la bordure
     * @param color optionel - la couleur de la bordure (noir par defaut)
     * @param border optionel - Le type de bordeur (SOLID par defaut)
     * @returns le builder
     */
    setBorderLeft(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderLeft = borderConstructed;
        return this;
    }

    /**
     * Permet de mettre un bordure a droite a l'element
     * @param width l'epaiseur de la bordure
     * @param color optionel - la couleur de la bordure (noir par defaut)
     * @param border optionel - Le type de bordeur (SOLID par defaut)
     * @returns le builder
     */
    setBorderRight(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderRight = borderConstructed;
        return this;
    }

    /**
     * Permet de mettre une couleur de fond
     * @param color La couleur de fond
     * @returns le builder
     */
    setBackgroundColor(color:Color | string){
        this.backgroundColor = color;
        return this;
    }

    /**
     * Permet de centrer le contenu
     * @returns Le builder
     */
    centerContent(){
        this.alignment = AlignContent.CENTER;
        return this;
    }

    /**
     * Permet de placer le contenu comme voulue (gauche, centrer, droite,...)
     * @param align L'alignement voulu
     * @returns Le builder
     */
    setAlignment(align:AlignContent){
        this.alignment = align;
        return this;
    }

    /**
     * Permet d'ajouter du padding au bloc
     * @param value La taille du padding 
     * @param unit le type d'unité pour la taille renseigner (Pixel par defaut)
     * @returns le builder
     */
    setPadding(value : number, unit?: UnitySize){
        if(!unit) unit = UnitySize.PIXEL

        if(value<0){
            console.warn('You passed a negative value to setPadding, padding doesn\'t take negative values')
        }
        this.padding =value+ unit;
        return this;
    }

    /**
     * Permet de mettre un padding differents pour chaque coté
     * {@link setPadding} pour toutes les padding en meme temps.
     * @param top La taille du padding en haut
     * @param right La taille du padding a droite
     * @param bottom La taille du padding en bas
     * @param left La taille du padding a gauche
     * @param unit L'unité du padding (Pixel par defaut)
     * @returns Le builder
     */
    setPaddingSides(top:number, right:number, bottom:number, left:number, unit?:UnitySize){
        if(!unit) unit = UnitySize.PIXEL

        if(top<0 || right<0 || left<0 || bottom<0){
            console.warn('You passed a negative value to setPaddingSides, padding doesn\'t take negative values')
        }
        this.padding = top+unit+" "+right+unit+" "+bottom+unit+" "+left+unit;
        return this;
    }

    /**
     * Permet de mettre des marges
     * @param value La valeur
     * @param unit L'unité de la margin (defaut en pixel)
     * @returns Le builder
     */
    setMargin(value : number, unit?: UnitySize){
        if(!unit) unit = UnitySize.PIXEL

        this.margin =value + unit;
        return this;
    }

    /**
     * Permet de mettre des marges
     * @param top La marge en haut
     * @param right La marge a droite
     * @param bottom La marge en bas
     * @param left La marge a gauche
     * @param unit L'unite de la marge
     * @returns Le builder
     */
    setMarginSides(top:number, right:number, bottom:number, left:number, unit?:UnitySize){
        if(!unit) unit = UnitySize.PIXEL

        this.margin = top+unit+" "+right+unit+" "+bottom+unit+" "+left+unit;
        return this;
    }

    /**
     * Display l'element sous forme de bloc
     * @returns Le builder
     */
    displayElementInBlock() {
        this.display = Display.BLOCK;
        return this;
    }
    /**
     * Display l'element sous forme de bloc flexible
     * @returns Le builder
     */
    displayElementInFlex() {
        this.display = Display.FLEX;
        return this;
    }

    /**
     * Display l'element en ligne
     * @returns Le builder
     */
    displayElementInline() {
        this.display = Display.INLINE;
        return this;
    }
    /**
     * Display l'element en Flow
     * @returns Le builder
     */
    displayElementInFlow() {
        this.display = Display.FLOW;
        return this;
    }

    /**
     * Display element float
     * @param float L'endroit ou la box float
     * @returns Le builder
     */
    putBoxFloatting(float:Float) {
        this.float = float;
        return this;
    }

    /**
     * Permet d'ajouter une ombre au bloc
     * @param shadowColor La couleur de l'ombre
     * @returns Le builder
     */
    addShadow(shadowColor?:Color) {
        if (!shadowColor) this.shadowColor = Color.BLACK
        else this.shadowColor = shadowColor;
        return this;
    }

    /**
     * Permet d'ajouter des colonnes à un bloc
     * @param columnNumber le nombre de colonnes
     * @returns le builder
     */
    displayInColumn(columnNumber?:number) {
        if (!columnNumber) columnNumber = 2
        this.columnNumber = columnNumber;
        return this;
    }

    /**
     * Permet de reprendre le bloc parent
     * @returns Le builder parent
     */
    endBlockEdit():parentType{
        return this.parentBuilder;
    }

    createModel(){
        return new WikiBlockStyle({
            margin:this.margin,
            padding:this.padding,
            border:this.border,
            background:this.backgroundColor,
            alignment:this.alignment,
            display:this.display,
            float:this.float,
            borderBot:this.borderBot,
            borderLeft:this.borderLeft,
            borderRight: this.borderRight,
            borderTop: this.borderTop,
            shadowColor:this.shadowColor,
            columnNumber:this.columnNumber
        });
    }

}
