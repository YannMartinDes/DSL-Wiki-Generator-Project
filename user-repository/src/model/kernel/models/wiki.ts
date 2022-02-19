import { WikiContent } from "./content";
import WikiElementStyle from "./elements/wiki-element-style";
import WikiNavBar from "./navBar";
import WikiSubject from "./subject";

export default class Wiki {
    contentStyle?:WikiElementStyle

    subject?:WikiSubject
    navBar?:WikiNavBar

    content!:WikiContent

}