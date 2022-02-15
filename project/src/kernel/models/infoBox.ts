import WikiElement from "./elements/wikiElement";
export default class InfoBox {
    elements:WikiElement[];

    constructor(elements:WikiElement[]){
        this.elements = elements;
    }
}