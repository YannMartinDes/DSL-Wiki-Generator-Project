import {AlignContent} from "../enum/align-content.enum";

export default class WikiImageStyle{
    border?:string
    alignment?:AlignContent
    //TODO : element de style pour une image?

    constructor({border, alignment}:
                    {margin?:string, padding?:string, border?:string, background?:string, alignment?:AlignContent}) {
        this.border = border;
        this.alignment = alignment;
    }
}
