import Linkable from "../linkable";
import Section from "../section";

export default class Chapter extends Linkable{
    sections:Section[]

    constructor(id:string,sections:Section[]) {
        super(id);
        this.sections = sections;
    }
}