import WikiElement from "./elements/wikiElement";

export default class Summary {
    elements?:WikiElement[];

    constructor(elements:WikiElement[]){
        this.elements = elements;
    }
}