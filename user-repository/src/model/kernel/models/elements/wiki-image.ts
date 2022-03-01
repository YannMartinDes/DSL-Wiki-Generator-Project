import WikiBlockStyle from "../style/wiki-block-style";
import WikiTextStyle from "../style/wiki-text-style";

export default class WikiImageStyle{
    blockStyle?: WikiBlockStyle
    resumeStyle?: WikiTextStyle
    blockResumeStyle?: WikiBlockStyle
    blockImageStyle?: WikiBlockStyle



    constructor({style,resumeStyle,blockResumStyle,blockImageStyle}:{style?:WikiBlockStyle,resumeStyle?:WikiTextStyle,blockResumStyle?:WikiBlockStyle,blockImageStyle?:WikiBlockStyle}) {
        this.blockStyle=style;
        this.resumeStyle=resumeStyle;
        this.blockResumeStyle=blockResumStyle;
        this.blockImageStyle=blockImageStyle;
    }
}
