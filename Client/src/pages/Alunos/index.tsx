import { useState, useEffect } from 'react';

import { Container, TableContainer, TableAlunos } from './style'
import { TiDelete } from "react-icons/ti";

import { fetchAllAlunos } from '../../services/AlunosService';
import { AlunoType } from '../../types/AlunoType';

export function Alunos () {
    const [alunos, setAlunos] = useState<AlunoType[] | undefined>(undefined);

    useEffect(() => {
        async function getAlunos() {
            try {
                const data = await fetchAllAlunos();
                setAlunos(data as AlunoType[]);
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            }
        }

        getAlunos();
    }, []);

    console.log(alunos)


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
                        {alunos?.map((aluno) => (
                            <tr>
                                <td>{aluno.name}</td>
                                <td>{aluno.grade1.toFixed(2)}</td>
                                <td>{aluno.grade2.toFixed(2)}</td>
                                <td>{aluno.grade3.toFixed(2)}</td>
                                <td>{aluno.grade4.toFixed(2)}</td>
                                <td>{aluno.grade5.toFixed(2)}</td>
                                <td>{aluno.frequency}%</td>
                                <td>0.00</td>
                                <td>
                                    <div>
                                        <TiDelete/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </TableAlunos>
            </TableContainer>
        </Container>
    )
}