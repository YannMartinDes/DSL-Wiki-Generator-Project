import NavBar from "./navBar";
import Subject from "./subject";

export default class Wiki {
    name:string
    subjects:Subject[]
    navBars:NavBar[]

    constructor(name:string,subjects:Subject[],navBars:NavBar[]){
        this.name = name;
        this.subjects = subjects;
        this.navBars = navBars
    }
}