import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({ data,text,span, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div>
        <span>{data.span} </span>
        <span>{data.span} </span>
        <span>{data.span} </span>
        <span>{data.span} </span>
        <span>{data.span} </span>
      </div>
      <p>{data.text}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}