import {ImageContent} from "../model/kernel/models/content"

export default function ImageComponent({content}:{content:ImageContent}) {
  return (
    <a className='button' href={content.url}>{content.description}</a>
  )
}
