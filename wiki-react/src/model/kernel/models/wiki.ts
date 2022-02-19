import { WikiContent } from "./content";
import WikiElementStyle from "./elements/wiki-element-style";
import NavBar from "./navBar";
import Subject from "./subject";

export default class Wiki {
    contentStyle?:WikiElementStyle

    subject?:Subject
    navBar?:NavBar

    content!:WikiContent

}