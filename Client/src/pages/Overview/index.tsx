import { Container, DashBoard, AverageGrade, ListAlunos } from './style'

export function Overview () {
    return (
        <Container>
            <h1>Visão Geral</h1>

            <DashBoard>
                <AverageGrade>
                    <div>
                        <h2>Média Matemática</h2>
                        <p>7.0</p>
                    </div>
                    <div>
                        <h2>Média Física</h2>
                        <p>7.0</p>
                    </div>
                    <div>
                        <h2>Média Química</h2>
                        <p>7.0</p>
                    </div>
                    <div>
                        <h2>Média Biologia</h2>
                        <p>7.0</p>
                    </div>
                    <div>
                        <h2>Média Lógica</h2>
                        <p>7.0</p>
                    </div>
                    <div>
                        <h2>Frequência Geral</h2>
                        <p>80%</p>
                    </div>
                </AverageGrade>

                <ListAlunos>
                    <div>
                        <h2>Alunos acima da média da turma</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Média</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Carlos</td>
                                    <td>8.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2>Alunos com frequência baixa</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Frequência</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Carlos</td>
                                    <td>80%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ListAlunos>
            </DashBoard>
        </Container>
    )
}