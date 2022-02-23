import WikiBlockStyle from "../style/wiki-block-style";
import WikiTextStyle from "../style/wiki-text-style";

export default class WikiButtonStyle{
    block?:WikiBlockStyle
    text?:WikiTextStyle

    constructor({block, text}:
                    {block?:WikiBlockStyle, text?:WikiTextStyle}) {
        this.block = block;
        this.text = text;
    }
}
