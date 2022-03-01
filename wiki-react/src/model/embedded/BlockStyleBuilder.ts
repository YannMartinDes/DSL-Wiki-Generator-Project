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
    private height?:string
    private maxHeight?:string
    private columnNumber?:number
    private shadowColor?:Color
    private width?:string
    private maxWidth?:string
    private borderRadius?:string

    private parentBuilder:parentType

    constructor(parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Used to add border to the element
     * @param width width of the border
     * @param color optional - border's color (default : black)
     * @param border optional - border's type (default : SOLID)
     * @returns this builder
     */
    setBorder(width : number, color?:Color|string, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.border = borderConstructed;
        return this;
    }

    setBorderRadius(size:number){
        this.borderRadius = size +"px";
        return this;
    }

    /**
     * Used to add a top border to the element
     * @param width width of the border
     * @param color optional - border's color (default : black)
     * @param border optional - border's type (default : SOLID)
     * @returns this builder
     */
    setBorderTop(width : number, color?:Color|string, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderTop = borderConstructed;
        return this;
    }

    /**
     * Used to add a bottom border to the element
     * @param width width of the border
     * @param color optional - border's color (default : black)
     * @param border optional - border's type (default : SOLID)
     * @returns this builder
     */
    setBorderBot(width : number, color?:Color|string, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderBot = borderConstructed;
        return this;
    }

    /**
     * Used to add a left border to the element
     * @param width width of the border
     * @param color optional - border's color (default : black)
     * @param border optional - border's type (default : SOLID)
     * @returns this builder
     */
    setBorderLeft(width : number, color?:Color|string, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderLeft = borderConstructed;
        return this;
    }

    /**
     * Used to add a right border to the element
     * @param width width of the border
     * @param color optional - border's color (default : black)
     * @param border optional - border's type (default : SOLID)
     * @returns this builder
     */
    setBorderRight(width : number, color?:Color|string, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderRight = borderConstructed;
        return this;
    }

    /**
     * Used to add a background color to the element
     * @param color color of the background
     * @returns this builder
     */
    setBackgroundColor(color:Color | string){
        this.backgroundColor = color;
        return this;
    }

    /**
     * Can center the content of the element
     * @returns this builder
     */
    centerContent(){
        this.alignment = AlignContent.CENTER;
        return this;
    }

    /**
     * Used to place the content as needed (left, right, center, ...)
     * @param align the chosen alignment
     * @returns this builder
     */
    setAlignment(align:AlignContent){
        this.alignment = align;
        return this;
    }

    /**
     * Used to add padding to the element
     * @param value padding's size
     * @param unit unit for the size (default : pixel)
     * @returns this builder
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
     * Used to add a different padding to each side of the element
     * {@link setPadding} for setting all side at the same time.
     * @param top padding's top size
     * @param right padding's right size
     * @param bottom padding's bottom size
     * @param left padding's left size
     * @param unit unit for the size (default : pixel)
     * @returns this builder
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
     * Used to set margin
     * @param value margin's value
     * @param unit unit for the size (default : pixel)
     * @returns this builder
     */
    setMargin(value : number, unit?: UnitySize){
        if(!unit) unit = UnitySize.PIXEL

        this.margin =value + unit;
        return this;
    }

    /**
     * Used to add a different margin to each side of the element
     * {@link setMargin} for setting all side at the same time.
     * @param top margin's top size
     * @param right margin's right size
     * @param bottom margin's bottom size
     * @param left margin's left size
     * @param unit unit for the size (default : pixel)
     * @returns this builder
     */
    setMarginSides(top:number, right:number, bottom:number, left:number, unit?:UnitySize){
        if(!unit) unit = UnitySize.PIXEL

        this.margin = top+unit+" "+right+unit+" "+bottom+unit+" "+left+unit;
        return this;
    }

    setWidth(value : number, type?: UnitySize){
        if(!type) type = UnitySize.PIXEL

        if(value<0){
            console.warn('You passed a negative value to setWidth, width doesn\'t take negative values')
        }
        this.width =value+ type;
        return this;
    }

    setHeight(value : number, type?: UnitySize){
        if(!type) type = UnitySize.PIXEL

        if(value<0){
            console.warn('You passed a negative value to setHeight, height doesn\'t take negative values')
        }
        this.height =value+ type;
        return this;
    }

    setMaxWidth(value : number, type?: UnitySize){
        if(!type) type = UnitySize.PIXEL

        if(value<0){
            console.warn('You passed a negative value to setWidth, width doesn\'t take negative values')
        }
        this.maxWidth =value+ type;
        return this;
    }

    setMaxHeight(value : number, type?: UnitySize){
        if(!type) type = UnitySize.PIXEL

        if(value<0){
            console.warn('You passed a negative value to setHeight, height doesn\'t take negative values')
        }
        this.maxHeight =value+ type;
        return this;
    }


    



    /**
     * Display the element in block
     * @returns this builder
     */
    displayElementInBlock() {
        this.display = Display.BLOCK;
        return this;
    }
    /**
     * Display the element in flexible block
     * @returns this builder
     */
    displayElementInFlex() {
        this.display = Display.FLEX;
        return this;
    }

    /**
     * Display the element in line
     * @returns this builder
     */
    displayElementInline() {
        this.display = Display.INLINE;
        return this;
    }
    /**
     * Display the element in flow
     * @return this builder
     */
    displayElementInFlow() {
        this.display = Display.FLOW;
        return this;
    }

    /**
     * Can be used to place an element on the left or right side of it's container, the element is removed from the normal flow of the page
     * @param float side of the floating (left or right)
     * @returns this builder
     */
    putBoxFloating(float:Float) {
        this.float = float;
        return this;
    }

    /**
     * Used to add shadow to the element
     * @param shadowColor shadow's color
     * @returns this builder
     */
    addShadow(shadowColor?:Color) {
        if (!shadowColor) this.shadowColor = Color.BLACK
        else this.shadowColor = shadowColor;
        return this;
    }

    /**
     * Used to display column in the element
     * @param columnNumber columns' number
     * @returns this builder
     */
    displayInColumn(columnNumber?:number) {
        if (!columnNumber) columnNumber = 2
        this.columnNumber = columnNumber;
        return this;
    }

    /**
     * Used to return on the parent builder
     * @returns this builder's parent
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
            columnNumber:this.columnNumber,
            width:this.width,
            height:this.height,
            borderRadius:this.borderRadius,
            maxHeight:this.maxHeight,
            maxWidth:this.maxWidth
        });
    }

}
