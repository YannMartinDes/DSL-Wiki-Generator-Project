import Linkable from "../kernel/models/linkable";

class LinkableBuilder {

    //private rootBuilder; // ?
    public name:string;

    constructor(name:string) {
        this.name = name;
    }
    
    createModel():Linkable {
        return new Linkable();
    }
}
export default LinkableBuilder