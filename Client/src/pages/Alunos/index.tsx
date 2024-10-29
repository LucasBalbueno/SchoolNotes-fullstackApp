import { Container, TableAlunos } from './style'
import { TiDelete } from "react-icons/ti";

export function Alunos () {
    return (
        <Container>
            <h1>Lista de alunos</h1>

            <TableAlunos>
                <thead>
                    <tr>
                        <th>Nome do aluno</th>
                        <th>Disciplina 1</th>
                        <th>Disciplina 2</th>
                        <th>Disciplina 3</th>
                        <th>Disciplina 4</th>
                        <th>Disciplina 5</th>
                        <th>Frequência</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João Carlos</td>
                        <td>1.00</td>
                        <td>2.00</td>
                        <td>3.00</td>
                        <td>4.00</td>
                        <td>5.00</td>
                        <td>80%</td>
                        <td>
                            <div>
                                <TiDelete/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Maria Maça</td>
                        <td>1.00</td>
                        <td>2.00</td>
                        <td>3.00</td>
                        <td>4.00</td>
                        <td>5.00</td>
                        <td>80%</td>
                        <td>
                            <div>
                                <TiDelete/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Isa Melosa</td>
                        <td>1.00</td>
                        <td>2.00</td>
                        <td>3.00</td>
                        <td>4.00</td>
                        <td>5.00</td>
                        <td>80%</td>
                        <td>
                            <div>
                                <TiDelete/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Thiago Guloso</td>
                        <td>1.00</td>
                        <td>2.00</td>
                        <td>3.00</td>
                        <td>4.00</td>
                        <td>5.00</td>
                        <td>80%</td>
                        <td>
                            <div>
                                <TiDelete/>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </TableAlunos>
        </Container>
    )
}