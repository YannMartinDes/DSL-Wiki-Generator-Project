import WikiElementStyle from "./elements/wiki-element-style";
import NavBar from "./navBar";
import Subject from "./subject";

export default class Wiki {
    name:string
    childStyle?:WikiElementStyle

    subject?:Subject
    navBar?:NavBar

    content:any


    constructor(name:string,subject:Subject){
        this.name = name;
        this.subject=subject;

    }
}