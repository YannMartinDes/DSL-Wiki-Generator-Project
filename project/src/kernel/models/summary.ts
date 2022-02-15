import WikiElement from "./elements/wikiElement";

export default class Summary {
    elements:WikiElement[];
    id:string;

    constructor(id:string,elements:WikiElement[]){
        this.elements = elements;
        this.id = id;
    }
}