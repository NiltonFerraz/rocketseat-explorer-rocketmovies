import { Link } from "react-router-dom";

import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'

import { Container, Form, Content } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <header>
                    <Link to="/">
                        <FiArrowLeft />Voltar
                    </Link>
                    <h1>Novo filme</h1>
                </header>

                <Content>
                    <Form>
                        <div className='tituloenota'>
                            <Input placeholder="Título" />
                            <Input placeholder="Sua nota (de 0 a 5)" />
                        </div>

                        <Textarea placeholder="Observações" />

                        <Section title="Marcadores">
                            <div className='tags'>
                                <NoteItem value="Drama" />
                                <NoteItem isNew placeholder="Novo Marcador" />
                            </div>
                        </Section>

                        <div className='buttons'>
                            <div className="boxLeft">
                                <Button title="Excluir filme" />
                            </div>
                            <div className="boxRight">
                                <Button title="Salvar alterações" />
                            </div>
                        </div>

                    </Form>
                </Content>
            </main>
        </Container>
    )
}