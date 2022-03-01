import WikiBlockStyle from "../style/wiki-block-style";
import WikiElement from "./wiki-element";

export default class WikiTableStyle{
    tableBoxStyle?:WikiBlockStyle;
    borderCollapse=true;
    
    boxColumnHeader?:WikiBlockStyle
    elementCellColumnHeader?:WikiElement

    boxRowHeader?:WikiBlockStyle
    elementCellRowHeader?:WikiElement

    cellBlock?:WikiBlockStyle
    elementCellStyle?:WikiElement

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
                        elementCellColumnHeader?:WikiElement,
                        boxRowHeader?:WikiBlockStyle,
                        elementCellRowHeader?:WikiElement,
                        cellBlock?:WikiBlockStyle,
                        elementCellStyle?:WikiElement,
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
