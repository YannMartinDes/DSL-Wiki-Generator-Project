export class BlockStyleBuilder{

    border?:string
    backgroundColor?:string
    alignment?:string
    padding?:string
    margin?:string

    setBorder(border:string){
        this.border = border;
    }

    setBackgroundColor(color:string){
        this.backgroundColor = color;
    }

    setAlignment(align:string){
        this.alignment = align;
    }

    setPadding(padding:string){
        this.padding =padding;
    }

    setMargin(margin:string){
        this.margin =margin;
    }

    createModel(){
        //TODO
    }
    
}