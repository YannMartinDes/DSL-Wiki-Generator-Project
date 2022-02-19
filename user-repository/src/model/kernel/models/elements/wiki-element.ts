import WikiButton from "./wiki-button";
import WikiImage from "./wiki-image";
import WikiTable from "./wiki-table";
import WikiText from "./wiki-text";

export default class WikiElement{
    button?:WikiButton
    table?:WikiTable
    imageStyle?:WikiImage
    text?:WikiText
}