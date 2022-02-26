import { Border } from "../kernel/models/enum/border.enum";
import { Color } from "../kernel/models/enum/color.enum";

export class BorderBuilder{
    static border(value : number, color:Color, border:Border){
        let borderConstructed=value+"px "+color+ " "+border
        return borderConstructed;
    }
}