import TextStyle from "../style/textStyle";
import BlockStyle from "../style/blockStyle";
import Linkable from "../linkable";
import Section from "../section";

export default class Chapter extends Linkable{
    sections:Section[]
    blockStyle?:BlockStyle
    title?:string
    titleStyle?:TextStyle

    constructor(id:string,sections:Section[]) {
        super(id);
        this.sections = sections;
    }
}