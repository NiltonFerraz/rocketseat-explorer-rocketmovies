import { Link } from "react-router-dom";

import { FiPlus } from 'react-icons/fi';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

import { Container, Content, NewNote, Title } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

export function Home() {

  return (
    <Container>
      <Header></Header>

<main>
      <Title>
        <h1>Meus filmes</h1>
        <NewNote to="/new">
          <FiPlus />
          Adicionar filme
        </NewNote>
      </Title>

      <Content>
        <Section to="/">
          <Link to="/details/:1">
            <Note to="/" data={{
              title: 'Interestellar',
              span: <RiStarFill />,
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                { id: '1', name: 'ficção científica' },
                { id: '2', name: 'drama' },
                { id: '3', name: 'família' },
              ]
            }}
            />
          </Link>
        </Section>


        <Section >
          <Note data={{
            title: 'Interestellar',
            span: <RiStarFill />,
            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'ficção científica' },
              { id: '2', name: 'drama' },
              { id: '3', name: 'família' },
            ]
          }}
          />
        </Section>
        <Section >
          <Note data={{
            title: 'Interestellar',
            span: <RiStarFill />,
            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
            tags: [
              { id: '1', name: 'ficção científica' },
              { id: '2', name: 'drama' },
              { id: '3', name: 'família' },
            ]
          }}
          />
        </Section>

      </Content>

</main>
    </Container>
  )
}