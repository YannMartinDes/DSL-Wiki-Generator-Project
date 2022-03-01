import { TableContent } from "../model/kernel/models/content";
import WikiElementComponent from "./wiki-element-component";

export default function TableComponent({table}:{table:TableContent}) {

  return (
    <table>
        {
            table.table.map((row,index)=>{
                const headerRow= (table.isFirstRowHeader && index===0)?"table-header-row":""
                return (
                    <tr className={headerRow}>
                        {row.map((column,index)=>{
                            const headerColumn= (table.isFirstColumnHeader && index===0)?"table-header-column":""
                            return (<td className={headerColumn}><WikiElementComponent content={column}></WikiElementComponent></td>)
                        })}
                    </tr>
                )
            })
        }
    </table>
  )
}
