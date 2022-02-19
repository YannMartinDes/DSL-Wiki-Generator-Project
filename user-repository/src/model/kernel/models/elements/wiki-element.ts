import WikiButton from "./wiki-button";
import WikiImage from "./wiki-image";
import WikiTable from "./wiki-table";
import WikiText from "./wiki-text";

export default class WikiElement{
    button?:WikiButton
    table?:WikiTable
    image?:WikiImage
    text?:WikiText

    constructor({button,table,text,image}:
        {button?:WikiButton, table?:WikiTable, image?:WikiImage, text?:WikiText}){
        this.button = button;
        this.image = image;
        this.table = table;
        this.text = text;    
    }

}