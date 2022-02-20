import { ButtonContent } from "../model/kernel/models/content";

export default function ButtonComponent({content}:{content:ButtonContent}) {
  return (
    <a className='button' href={content.url}>{content.value}</a>
  )
}
