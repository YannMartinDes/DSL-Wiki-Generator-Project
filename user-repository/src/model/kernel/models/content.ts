export class WikiContent{

    constructor(
        public subjects:SubjectContent[]=[],
        public navBar?:NavBarContent
    ){}
}

export class SubjectContent{
    constructor(
        public subject?:string,
        public summary?:SummaryContent,
        public tableOfContent?:TOCContent,
        public infoBox?:InfoBox,
        public chapters?:ChapterContent[],
        public reference?:ChapterContent[],
    ){}
}
export class ReferencesContent{
    constructor(
        public content:WikiElementContent,
        public title:string,
    ){}
}
export class RelatedSubjectContent{
    constructor(
        public content:WikiElementContent,
        public title:string,
    ){}
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


export abstract class ChapterContent{}

export class ClassiqueChapterContent extends ChapterContent{
    constructor(
        public title:string,
        public chapterElementContent:ClassiqueChapterElementContent[],
    ){super()}
}

export class GalleryChapterContent extends ChapterContent{
    constructor(
        public title:string,
        public images:ImageContent[],
    ){super()}
}

export class BibliographyContent{
    constructor(
        public textContent:TextContent,
    ){

    }

}

export type ClassiqueChapterElementContent = WikiElementContent|ChapterContent

export abstract class WikiElementContent{}

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
    constructor(
        public url:string,
        public description:string,
    ){
        super()
    }
}
export class TableContent extends WikiElementContent{
}
