import WikiBlockStyle from "../style/wiki-block-style";
import WikiElement from "./wiki-element";

export default class WikiTableStyle{
    tableBoxStyle?:WikiBlockStyle;
    borderCollapse=true;
    
    boxColumnHeader?:WikiBlockStyle
    elementCellColumHeader?:WikiElement

    boxRowHeader?:WikiBlockStyle
    elementCellRowHeader?:WikiElement

    cellBlock?:WikiBlockStyle
    elementCellStyle?:WikiElement

    constructor({
        tableBoxStyle,
        borderCollapse,
        boxColumnHeader,
        elementCellColumHeader,
        boxRowHeader,
        elementCellRowHeader,
        cellBlock,
        elementCellStyle,
    } :
                    {    
                        tableBoxStyle?:WikiBlockStyle,
                        borderCollapse?:boolean,
                        boxColumnHeader?:WikiBlockStyle,
                        elementCellColumHeader?:WikiElement,
                        boxRowHeader?:WikiBlockStyle,
                        elementCellRowHeader?:WikiElement,
                        cellBlock?:WikiBlockStyle,
                        elementCellStyle?:WikiElement,
                    }) {
        this.tableBoxStyle =tableBoxStyle
        if(borderCollapse!==undefined)
            this.borderCollapse = borderCollapse
        this.boxColumnHeader =boxColumnHeader
        this.elementCellColumHeader =elementCellColumHeader
        this.boxRowHeader =boxRowHeader
        this.elementCellRowHeader =elementCellRowHeader
        this.cellBlock =cellBlock
        this.elementCellStyle =elementCellStyle

    }
}
