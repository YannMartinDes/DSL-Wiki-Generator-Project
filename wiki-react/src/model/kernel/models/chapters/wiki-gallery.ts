
import WikiElementStyle from "../elements/wiki-element-style";
import WikiImageStyle from "../elements/wiki-image";
import WikiBlockStyle from "../style/wiki-block-style";
import { WikiTitleStyle } from "../style/wiki-title-style";

export default class WikiGallery{
    titleStyle?:WikiTitleStyle
    imagesStyle?:WikiImageStyle
    galeryBoxStyle?:WikiBlockStyle

    constructor({titleStyle, imagesStyle, galeryBoxStyle}:
                    {titleStyle?:WikiTitleStyle, imagesStyle?:WikiImageStyle, galeryBoxStyle?:WikiBlockStyle}){
        this.titleStyle = titleStyle;
        this.imagesStyle = imagesStyle;
        this.galeryBoxStyle = galeryBoxStyle;
    }
}
