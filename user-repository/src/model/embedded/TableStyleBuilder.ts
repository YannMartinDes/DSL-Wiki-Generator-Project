
import WikiTableStyle from "../kernel/models/elements/wiki-table";
import {WikiElementStyleBuilder} from "./WikiElementStyleBuilder";
import { BlockStyleBuilder } from "./BlockStyleBuilder";

export class TableStyleBuilder {

    tableBox?:BlockStyleBuilder<TableStyleBuilder>

    cellBlock?:BlockStyleBuilder<TableStyleBuilder>
    elementCellStyle?:WikiElementStyleBuilder

    borderCollapse=true;

    boxColumnHeader?:BlockStyleBuilder<TableStyleBuilder>
    elementCellColumnHeader?:WikiElementStyleBuilder

    boxRowHeader?:BlockStyleBuilder<TableStyleBuilder>
    elementCellRowHeader?:WikiElementStyleBuilder

    private parentBuilder:WikiElementStyleBuilder;

    constructor (parentBuilder:WikiElementStyleBuilder){
        this.parentBuilder = parentBuilder;
    }

    /**
     * Edit table box
     * @returns table box builder
     */
    editTableBox(){
        if(!this.tableBox){
            this.tableBox = new BlockStyleBuilder(this)
        }
        return this.tableBox
    }
    /**
     * Used to edit the cell
     * @returns this builder for cell box
     */
    editCellBox(){
        if(!this.cellBlock){
            this.cellBlock = new BlockStyleBuilder(this)
        }
        return this.cellBlock;
    }

    /**
     * Used to edit the cell content style
     * @returns this builder for cell content
     */
    editCellContent(){
        if(!this.elementCellStyle){
            this.elementCellStyle = new WikiElementStyleBuilder()
        }
        return this.elementCellStyle;
    }

    /**
     * Used to edit the cell row header
     * @returns this builder for cell box
     */
    editHeaderRowCellBox(){
        if(!this.boxRowHeader){
            this.boxRowHeader = new BlockStyleBuilder(this)
        }
        return this.boxRowHeader;
    }

    /**
     * Used to edit the cell row header content style
     * @returns this builder for cell content
     */
    editHeaderRowCellContent(){
        if(!this.elementCellRowHeader){
            this.elementCellRowHeader = new WikiElementStyleBuilder()
        }
        return this.elementCellRowHeader;
    }

        /**
     * Used to edit the cell row header
     * @returns this builder for cell box
     */
    editHeaderColumnCellBox(){
        if(!this.boxColumnHeader){
            this.boxColumnHeader = new BlockStyleBuilder(this)
        }
        return this.boxColumnHeader;
    }

    /**
     * Used to edit the cell row header content style
     * @returns this builder for cell content
     */
    editHeaderColmunCellContent(){
        if(!this.elementCellColumnHeader){
            this.elementCellColumnHeader = new WikiElementStyleBuilder()
        }
        return this.elementCellColumnHeader;
    }

    /**
     * Make array with border collapse (default true)
     * @param value is border collapse
     * @returns this builder
     */
    setBorderCollapse(value:boolean){
        this.borderCollapse=value
        return this;
    }


    /**
     * Used to return to the parent builder
     * @returns the parent builder
     */
    endTableEdit():WikiElementStyleBuilder{
        return this.parentBuilder;
    }

    createModel():WikiTableStyle{
        return new WikiTableStyle({
            tableBoxStyle:this.tableBox?.createModel(),
            borderCollapse:this.borderCollapse,
            cellBlock:this.cellBlock?.createModel(),
            boxColumnHeader:this.boxColumnHeader?.createModel(),
            elementCellColumnHeader:this.elementCellColumnHeader?.createModel(),
            elementCellRowHeader:this.elementCellRowHeader?.createModel(),
            elementCellStyle:this.elementCellStyle?.createModel(),
            boxRowHeader:this.boxRowHeader?.createModel(),
        });
    }

}
