import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Search } from './styles'
import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>

      <h1>RocketMovies</h1>

      <Search>
        <Input placeholder='Pesquisar pelo título'></Input>
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Nilton Ferraz</strong>
          <a href='#'>sair</a>
        </div>

        <img
          src="https://github.com/niltonferraz.png"
          alt="Foto do usuário"
        />
      </Profile>

    </Container>
  )
}