
export class TextStyleBuilder<parentType> {

    private caps:boolean;
    private textAlign:string;
    private bold:boolean;
    private italic:boolean;
    private underline:boolean;
    private fontColor:string;
    private police:string;

    parentBuilder:parentType;

    constructor (parentBuilder:parentType){
        this.parentBuilder = parentBuilder;

        this.caps = false;
        this.textAlign = "Left"
        this.bold = false;
        this.italic = false;
        this.underline = false;
        this.fontColor = "Black";
        this.police = "Arial"
    }

    capitalized(caps:boolean){
        this.caps = caps;
        return this;
    }

    putInBold(bold:boolean){
        this.bold = bold;
        return this;
    }

    italicize(italic:boolean){
        this.italic = italic;
        return this;
    }

    setPolice(police:string){
        this.police = police;
        return this;
    }

    setFontColor(color:string){
        this.fontColor = color;
        return this;
    }

    underlined(underline:boolean){
        this.underline = underline;
        return this;
    }

    setTextAlign(align:string){
        this.textAlign = align;
        return this;
    }

    endTextStyle():parentType{
        return this.parentBuilder;
    }

    createModel(){
        //TODO
    }

}