import WikiElement from "./elements/wikiElement";
import Linkable from "./linkable";

export default class Section extends Linkable{
    elements:WikiElement[];

    constructor(elements:WikiElement[]){
        super();
        this.elements = elements;
    }
}