import { WikiContent } from "./content";
import WikiElementStyle from "./elements/wiki-element";
import WikiNavBar from "./wiki-nav-bar";
import WikiSubject from "./wiki-subject";

export default class Wiki {
    contentStyle?:WikiElementStyle

    subject?:WikiSubject
    navBar?:WikiNavBar

    content!:WikiContent

}