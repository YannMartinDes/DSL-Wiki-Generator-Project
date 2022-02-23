import { AlignContent } from "../kernel/models/enum/align-content.enum"
import { Border } from "../kernel/models/enum/border.enum"
import { Color } from "../kernel/models/enum/color.enum"
import { Float } from "../kernel/models/enum/float"
import { UnitySize } from "../kernel/models/enum/unity-font-size.enum"
import WikiBlockStyle from "../kernel/models/style/wiki-block-style"

export class BlockStyleBuilder<parentType>{

    private border?:string
    private backgroundColor?:string
    private alignment?:AlignContent
    private padding?:string
    private margin?:string
    private display?:string
    private float?:Float

    private parentBuilder:parentType

    constructor(parentBuilder:parentType){
        this.parentBuilder = parentBuilder;
    }

    setBorder(value : number, type : UnitySize ,color:Color, border:Border){
        let borderConstructed=value+type+" "+color+ " "+border
        this.border = borderConstructed;
        return this;
    }

    setBackgroundColor(color:Color | string){
        this.backgroundColor = color;
        return this;
    }

    setAlignment(align:AlignContent){
        this.alignment = align;
        return this;
    }

    setPadding(value : number, type : UnitySize){
        if(value<0){
            console.warn('You passed a negative value to setPadding, padding doesn\'t take negative values')
        }
        this.padding =value+ type;
        return this;
    }

    setPaddingSides(top:number, right:number, bottom:number, left:number, type:UnitySize){
        if(top<0 || right<0 || left<0 || bottom<0){
            console.warn('You passed a negative value to setPaddingSides, padding doesn\'t take negative values')
        }
        this.padding = top+type+" "+right+type+" "+bottom+type+" "+left+type;
        return this;
    }

    setMargin(value : number, type : UnitySize){
        this.margin =value + type;
        return this;
    }

    setMarginSides(top:number, right:number, bottom:number, left:number, type:UnitySize){
        this.margin = top+type+" "+right+type+" "+bottom+type+" "+left+type;
        return this;
    }

    setDisplay(display:string) {
        this.display = display;
        return this;
    }

    setFloat(float:Float) {
        this.float = float;
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
            float:this.float
        });
    }

}
