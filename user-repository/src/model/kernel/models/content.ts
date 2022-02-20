export class WikiContent{

    constructor(
        public subjects:SubjectContent[]=[],
        public navBar?:NavBarContent
    ){

    }
}

export class SubjectContent{
    constructor(
        public subject?:string,
        public summary?:SummaryContent,
        public tableOfContent?:TOCContent,
        public infoBox?:InfoBox,
        public chapters?:ChapterContent[],
    ){

    }


}

export class NavBarContent{
    constructor(
        public navBar:{content:string,url:string}[]
    ){}
}

export class SummaryContent{
    constructor(
        public value:TextContent
    ){}
}

export class InfoBox{
    constructor(
        public value:TextContent
    ){}
}

export class TOCContent{
    constructor(
        public toc:{content:string,url:string}[]
    ){}

}

export class ChapterContent{
    constructor(
        public title:string,
        public chapterElementContent:ChapterElementContent[],
    ){

    }

}

export class GalleryContent{
    constructor(
        public imagesContent:ImageContent[],
    ){

    }

}

export class RelatedSubjectContent{
    constructor(
        public textContent:TextContent,
    ){

    }

}

export class BibliographyContent{
    constructor(
        public textContent:TextContent,
    ){

    }

}

export class ReferencesContent{
    constructor(
        public textContent:TextContent,
    ){

    }

}

export type ChapterElementContent = WikiElementContent|ChapterContent

export abstract class WikiElementContent{
}

export class TextContent extends WikiElementContent{
    constructor(
        public formatedText:string
    ){
        super()
    }


}
export class ImageContent extends WikiElementContent{
    constructor(
        public url:string,
        public description:string,
    ){
        super()
    }

}
export class ButtonContent extends WikiElementContent{
}
export class TableContent extends WikiElementContent{
}
