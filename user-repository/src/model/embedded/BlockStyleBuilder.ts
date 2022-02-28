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

    private parentBuilder:parentType

    constructor(parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    setBorder(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.border = borderConstructed;
        return this;
    }

    setBorderTop(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderTop = borderConstructed;
        return this;
    }
    setBorderBot(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderBot = borderConstructed;
        return this;
    }
    setBorderLeft(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderLeft = borderConstructed;
        return this;
    }
    setBorderRight(width : number, color?:Color, border?:Border){
        if(!color) color = Color.BLACK;
        if(!border) border = Border.SOLID;

        let borderConstructed=width+"px "+color+ " "+border
        this.borderRight = borderConstructed;
        return this;
    }

    setBackgroundColor(color:Color | string){
        this.backgroundColor = color;
        return this;
    }

    centerContent(){
        this.alignment = AlignContent.CENTER;
        return this;
    }

    setAlignment(align:AlignContent){
        this.alignment = align;
        return this;
    }

    setPadding(value : number, type?: UnitySize){
        if(!type) type = UnitySize.PIXEL

        if(value<0){
            console.warn('You passed a negative value to setPadding, padding doesn\'t take negative values')
        }
        this.padding =value+ type;
        return this;
    }

    setPaddingSides(top:number, right:number, bottom:number, left:number, type?:UnitySize){
        if(!type) type = UnitySize.PIXEL

        if(top<0 || right<0 || left<0 || bottom<0){
            console.warn('You passed a negative value to setPaddingSides, padding doesn\'t take negative values')
        }
        this.padding = top+type+" "+right+type+" "+bottom+type+" "+left+type;
        return this;
    }

    setMargin(value : number, type?: UnitySize){
        if(!type) type = UnitySize.PIXEL

        this.margin =value + type;
        return this;
    }

    setMarginSides(top:number, right:number, bottom:number, left:number, type?:UnitySize){
        if(!type) type = UnitySize.PIXEL

        this.margin = top+type+" "+right+type+" "+bottom+type+" "+left+type;
        return this;
    }

    displayElementInBlock() {
        this.display = Display.BLOCK;
        return this;
    }
    displayElementInFlex() {
        this.display = Display.FLEX;
        return this;
    }
    displayElementInline() {
        this.display = Display.INLINE;
        return this;
    }
    displayElementInFlow() {
        this.display = Display.FLOW;
        return this;
    }

    putBoxFloatting(float:Float) {
        this.float = float;
        return this;
    }

    addShadow(shadowColor?:Color) {
        if (!shadowColor) this.shadowColor = Color.BLACK
        else this.shadowColor = shadowColor;
        return this;
    }

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
            shadowColor:this.shadowColor
        });
    }

}
