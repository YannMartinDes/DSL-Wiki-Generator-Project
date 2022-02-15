import Linkable from "../linkable";

export default class WikiElement {
    linkTo?:Linkable
    id:string

    constructor(id:string){
        this.id = id;
    }
}