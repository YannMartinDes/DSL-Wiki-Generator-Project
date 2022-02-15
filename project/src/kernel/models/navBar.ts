import WikiElement from "./elements/wikiElement";

export default class NavBar {
    elements:WikiElement[];

    constructor(elements:WikiElement[]){
        this.elements = elements;
    }
}