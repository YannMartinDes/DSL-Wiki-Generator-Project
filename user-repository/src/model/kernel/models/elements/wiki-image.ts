import WikiBlockStyle from "../style/wiki-block-style";

export default class WikiImageStyle{
    blockStyle?: WikiBlockStyle

    constructor({style}:{style?:WikiBlockStyle}) {
        this.blockStyle=style;
    }
}
