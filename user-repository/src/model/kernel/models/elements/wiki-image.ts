import WikiBlockStyle from "../style/wiki-block-style";
import WikiTextStyle from "../style/wiki-text-style";

export default class WikiImageStyle{
    blockStyle?: WikiBlockStyle
    resumeStyle?: WikiTextStyle
    blockResumeStyle?: WikiBlockStyle
    blockImageStyle?: WikiBlockStyle



    constructor({style,resumeStyle,blockResumeStyle,blockImageStyle}:{style?:WikiBlockStyle,resumeStyle?:WikiTextStyle,blockResumeStyle?:WikiBlockStyle,blockImageStyle?:WikiBlockStyle}) {
        this.blockStyle=style;
        this.resumeStyle=resumeStyle;
        this.blockResumeStyle=blockResumeStyle;
        this.blockImageStyle=blockImageStyle;
    }
}
