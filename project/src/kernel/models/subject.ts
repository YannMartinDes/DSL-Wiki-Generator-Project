import Chapter from "./chapters/chapter";
import InfoBox from "./infoBox";
import Linkable from "./linkable";
import NavBar from "./navBar";
import Summary from "./summary";
import TableOfContent from "./tableOfContent";

export default class Subject extends Linkable{
    navBar?:NavBar
    summary?:Summary
    tableOfContent?:TableOfContent
    infoBox?:InfoBox    
    chapters?:Chapter[]
}