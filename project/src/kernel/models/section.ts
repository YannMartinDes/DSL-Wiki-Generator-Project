import TextStyle from "./style/textStyle";
import BlockStyle from "./style/blockStyle";
import WikiElement from "./elements/wikiElement";
import Linkable from "./linkable";

export default class Section extends Linkable{
    elements:WikiElement[];
    blockStyle?:BlockStyle
    title?:string
    titleStyle?:TextStyle

    constructor(id:string,elements:WikiElement[]){
        super(id);
        this.elements = elements;
    }
}