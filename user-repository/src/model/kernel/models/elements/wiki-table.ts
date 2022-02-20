import {AlignContent} from "../enum/align-content.enum";

export default class WikiTableStyle{
    border?:string
    alignment?:AlignContent
    //TODO : element de style pour un tableau?

    constructor({border, alignment}:
                    {margin?:string, padding?:string, border?:string, background?:string, alignment?:AlignContent}) {
        this.border = border;
        this.alignment = alignment;
    }
}
