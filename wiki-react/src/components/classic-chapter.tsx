import React from 'react'
import {default as ClChptStyle} from "project/src/kernel/models/chapters/classic-chapter"
import { ClassicChapterContent } from '../content'

export default function ClassicChapter({classicChapter, content}:{classicChapter:ClChptStyle, content:ClassicChapterContent}) {
  return (
    <div>
        <h2>{content.title}</h2>
        <p>{content.value.text}</p>
    </div>
  )
}
