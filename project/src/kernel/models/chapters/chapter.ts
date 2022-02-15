import Linkable from "../linkable";
import Section from "../section";

export default class Chapter extends Linkable{
    sections:Section[]

    constructor(sections:Section[]) {
        super();
        this.sections = sections;
    }
}