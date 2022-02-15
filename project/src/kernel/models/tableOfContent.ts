import WikiElement from "./elements/wikiElement";

export default class TableOfContent {
    elements:WikiElement[];
    constructor(elements:WikiElement[]){
        this.elements = elements;
    }
}