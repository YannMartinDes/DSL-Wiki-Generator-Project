import WikiBlockStyle from "./wiki-block-style";
import WikiTextStyle from "./wiki-text-style";

export class WikiTitleStyle{
    wikiBlockStyle?:WikiBlockStyle
    wikiTextStyle?:WikiTextStyle

    constructor({wikiBlockStyle,wikiTextStyle}:
        {wikiBlockStyle?:WikiBlockStyle,wikiTextStyle?:WikiTextStyle}){
            this.wikiBlockStyle = wikiBlockStyle;
            this.wikiTextStyle = wikiTextStyle
        }
}