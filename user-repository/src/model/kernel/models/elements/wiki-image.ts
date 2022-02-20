import {AlignContent} from "../enum/align-content.enum";
import { Border } from '../enum/border.enum';

export default class WikiImageStyle{
    border?:Border
    alignment?:AlignContent
    //TODO : element de style pour une image?

    constructor({border, alignment}:
                    {border?:Border, alignment?:AlignContent}) {
        this.border = border;
        this.alignment = alignment;
    }
}
