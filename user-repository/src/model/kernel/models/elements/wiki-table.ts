import {AlignContent} from "../enum/align-content.enum";

export default class WikiTableStyle{
    border?:string
    alignment?:AlignContent
    //TODO : element de style pour un tableau?

    constructor({border, alignment}:
                    {border?:string, alignment?:AlignContent}) {
        this.border = border;
        this.alignment = alignment;
    }
}
