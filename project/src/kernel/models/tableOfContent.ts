import TextStyle from "../textStyle";
import WikiElement from "./elements/wikiElement";

export default class TableOfContent {
    elements:WikiElement[];
    id:string;
    title?:string;
    titleStyle?:TextStyle;
    numbered?:boolean

    constructor(id:string,elements:WikiElement[]){
        this.elements = elements;
        this.id = id;
    }
}