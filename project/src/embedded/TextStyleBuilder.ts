
export class TextStyleBuilder<parentType> {

    caps:boolean;
    textAlign:string;
    bold:boolean;
    italic:boolean;
    underline:boolean;
    fontColor:string;
    police:string;

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
    }

    putInBold(bold:boolean){
        this.bold = bold;
    }

    italicize(italic:boolean){
        this.italic = italic;
    }

    setPolice(police:string){
        this.police = police;
    }

    setFontColor(color:string){
        this.fontColor = color;
    }

    underlined(underline:boolean){
        this.underline = underline;
    }

    setTextAlign(align:string){
        this.textAlign = align;
    }

    endTextStyle():parentType{
        return this.parentBuilder;
    }

    createModel(){
        //TODO
    }

}