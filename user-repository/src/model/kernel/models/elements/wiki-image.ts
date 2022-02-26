import WikiBlockStyle from "../style/wiki-block-style";
import WikiTextStyle from "../style/wiki-text-style";

export default class WikiImageStyle{
    blockStyle?: WikiBlockStyle
    resumeStyle?: WikiTextStyle


    constructor({style,resumeStyle}:{style?:WikiBlockStyle,resumeStyle?:WikiTextStyle}) {
        this.blockStyle=style;
        this.resumeStyle=resumeStyle;
    }
}
