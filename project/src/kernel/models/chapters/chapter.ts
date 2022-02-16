import TextStyle from "../../textStyle";
import BlockStyle from "../blockStyle";
import Linkable from "../linkable";
import Section from "../section";

export default class Chapter extends Linkable{
    sections:Section[]
    blockStyle?:BlockStyle
    title?:TextStyle

    constructor(id:string,sections:Section[]) {
        super(id);
        this.sections = sections;
    }
}