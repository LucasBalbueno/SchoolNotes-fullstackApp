import { Container, Content, Form, ButtonAdd } from "./style";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function New () {
    return(
        <Container>
            <Header />

            <Content>
                <header>
                    <h1>Criar nota</h1>
                    <Link to="/">voltar</Link>
                </header>
                    
                <Form>
                    <label>
                        Nome
                        <input placeholder="Nome do aluno" type="text" maxLength={50} />
                    </label>

                    <label>
                        Nota na disciplina de Matemática
                        <input placeholder="0 a 10" type="number" min={0} max={10} />
                    </label>

                    <label>
                        Nota na disciplina de Física
                        <input placeholder="0 a 10" type="number" min={0} max={10} />
                    </label>

                    <label>
                        Nota na disciplina de Química
                        <input placeholder="0 a 10" type="number" min={0} max={10} />
                    </label>

                    <label>
                        Nota na disciplina de Biologia
                        <input placeholder="0 a 10" type="number" min={0} max={10} />
                    </label>

                    <label>
                        Nota na disciplina de Estatística
                        <input placeholder="0 a 10" type="number" min={0} max={10} />
                    </label>

                    <label>
                        Frequência do aluno
                        <input placeholder="0% a 100%" type="number" min={0} max={100} />
                    </label>

                    <ButtonAdd>
                        Salvar
                    </ButtonAdd>
                </Form>
            </Content>
        </Container>
    )
}