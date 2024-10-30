import { Container, TableContainer, TableAlunos } from './style'
import { TiDelete } from "react-icons/ti";

import { fetchAlunos } from '../../services/AlunosService';

export function Alunos () {
    const alunos = fetchAlunos();
    console.log(alunos);


    return (
        <Container>
            <h1>Lista de alunos</h1>

            <TableContainer>
                <TableAlunos>
                    <thead>
                        <tr>
                            <th>Nome do aluno</th>
                            <th>Matemática</th>
                            <th>Física</th>
                            <th>Química</th>
                            <th>Biologia</th>
                            <th>Estatística</th>
                            <th>Frequência</th>
                            <th>Média</th>
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
                            <td>7.00</td>
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
                            <td>7.00</td>
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
                            <td>7.00</td>
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
                            <td>7.00</td>
                            <td>
                                <div>
                                    <TiDelete/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </TableAlunos>
            </TableContainer>
        </Container>
    )
}