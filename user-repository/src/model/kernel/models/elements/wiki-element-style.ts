import WikiText from "./wiki-text";
import WikiButtonStyle from "./wiki-button";
import WikiTableStyle from "./wiki-table";
import WikiImageStyle from "./wiki-image";


export default class WikiElementStyle {
    button?:WikiButtonStyle
    table?:WikiTableStyle
    image?:WikiImageStyle
    text?:WikiText

    constructor({button,table,text,image}:
        {button?:WikiButtonStyle, table?:WikiTableStyle, image?:WikiImageStyle, text?:WikiText}){
        this.button = button;
        this.image = image;
        this.table = table;
        this.text = text;
    }

}
