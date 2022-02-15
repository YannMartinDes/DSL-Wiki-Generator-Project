import Linkable from "../linkable";

export default class WikiElement {
    linkTo?:Linkable

    constructor(linkTo?:Linkable){
        this.linkTo = linkTo;
    }
}