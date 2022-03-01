import WikiBlockStyle from "../style/wiki-block-style";
import WikiElementStyle from "./wiki-element-style";

export default class WikiTableStyle{
    tableBoxStyle?:WikiBlockStyle;
    borderCollapse=true;
    
    boxColumnHeader?:WikiBlockStyle
    elementCellColumnHeader?:WikiElementStyle

    boxRowHeader?:WikiBlockStyle
    elementCellRowHeader?:WikiElementStyle

    cellBlock?:WikiBlockStyle
    elementCellStyle?:WikiElementStyle

    constructor({
        tableBoxStyle,
        borderCollapse,
        boxColumnHeader,
        elementCellColumnHeader,
        boxRowHeader,
        elementCellRowHeader,
        cellBlock,
        elementCellStyle,
    } :
                    {    
                        tableBoxStyle?:WikiBlockStyle,
                        borderCollapse?:boolean,
                        boxColumnHeader?:WikiBlockStyle,
                        elementCellColumnHeader?:WikiElementStyle,
                        boxRowHeader?:WikiBlockStyle,
                        elementCellRowHeader?:WikiElementStyle,
                        cellBlock?:WikiBlockStyle,
                        elementCellStyle?:WikiElementStyle,
                    }) {
        this.tableBoxStyle =tableBoxStyle
        if(borderCollapse!==undefined)
            this.borderCollapse = borderCollapse
        this.boxColumnHeader =boxColumnHeader
        this.elementCellColumnHeader =elementCellColumnHeader
        this.boxRowHeader =boxRowHeader
        this.elementCellRowHeader =elementCellRowHeader
        this.cellBlock =cellBlock
        this.elementCellStyle =elementCellStyle

    }
}
