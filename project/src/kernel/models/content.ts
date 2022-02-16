export interface WikiContent{
    subjects:SubjectContent[]
    navBar?:NavBarContent
}

export interface SubjectContent{
    subject?:string
    summary?:SummaryContent
    tableOfContent?:TOCContent
    infoBox?:InfoBox
    chapters?:ChapterContent[]

}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface NavBarContent{}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SummaryContent{
    value:TextContent
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InfoBox{
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TOCContent{
    value:{content:string,url:string}[]
}

export interface ChapterContent{
    type:ChapterTypeContent,
    subChapters?:ChapterContent[],
    title:string
}
export interface GalleryChapterContent extends ChapterContent{
    type:ChapterTypeContent.GALLERY
}
export interface RelatedSubjectChapterContent extends ChapterContent{
    type:ChapterTypeContent.RELATED_SUBJECT
}
export interface ReferenceChapterContent extends ChapterContent{
    type:ChapterTypeContent.REFERENCE
}
export interface BibliographyChapterContent extends ChapterContent{
    type:ChapterTypeContent.BIBLIOGRAPHY
}
export interface ClassicChapterContent extends ChapterContent{
    type:ChapterTypeContent.CLASSIC
    value:TextContent
}

export interface WikiElementContent{
    type:WikiElementTypeContent
}

export interface TextContent extends WikiElementContent{
    type:WikiElementTypeContent.TEXT
    text:string
}
export interface ImageContent extends WikiElementContent{
    type:WikiElementTypeContent.IMAGE
    text:string

}
export interface ButtonContent extends WikiElementContent{
    type:WikiElementTypeContent.BUTTON
}
export interface TableContent extends WikiElementContent{
    type:WikiElementTypeContent.TABLE
}

export const enum ChapterTypeContent{
    CLASSIC="CLASSIC",
    GALLERY="GALLERY",
    RELATED_SUBJECT="RELATED_SUBJECT",
    REFERENCE="REFERENCE",
    BIBLIOGRAPHY="BIBLIOGRAPHY"
}


export const enum WikiElementTypeContent{
    TEXT="TEXT",
    IMAGE="IMAGE",
    BUTTON="BUTTON",
    TABLE="TABLE",
}