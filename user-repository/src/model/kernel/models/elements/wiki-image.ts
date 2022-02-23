import {AlignContent} from "../enum/align-content.enum";
import { Border } from '../enum/border.enum';
import {UnitySize} from "../enum/unity-font-size.enum";
import WikiBlockStyle from "../style/wiki-block-style";

export default class WikiImageStyle{
    style?: WikiBlockStyle

    constructor({style}:{style?:WikiBlockStyle}) {
        this.style=style;
    }
}
