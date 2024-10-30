import { useState, useEffect } from 'react';

import { Container, TableContainer, TableAlunos } from './style'
import { TiDelete } from "react-icons/ti";

import { deleteAlunoById, fetchAllAlunos } from '../../services/AlunosService';
import { AlunoType } from '../../types/AlunoType';

export function Alunos () {
    const [alunos, setAlunos] = useState<AlunoType[] | undefined>(undefined);

    useEffect(() => {
        async function getAlunos() {
            try {
                const data = await fetchAllAlunos();
                const alunosComMedia = (data as AlunoType[]).map(aluno => ({
                    ...aluno,
                    media: (aluno.grade1 + aluno.grade2 + aluno.grade3 + aluno.grade4 + aluno.grade5) / 5,
                }));
                setAlunos(alunosComMedia);
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            }
        }

        getAlunos();
    }, []);

    const handleDeleteButton = (id: number) => {
        deleteAlunoById(id);
        window.location.reload();
    }

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
                            <tr key={aluno.id}>
                                <td>{aluno.name}</td>
                                <td>{aluno.grade1.toFixed(2)}</td>
                                <td>{aluno.grade2.toFixed(2)}</td>
                                <td>{aluno.grade3.toFixed(2)}</td>
                                <td>{aluno.grade4.toFixed(2)}</td>
                                <td>{aluno.grade5.toFixed(2)}</td>
                                <td>{aluno.frequency}%</td>
                                <td>{aluno.media.toFixed(2)}</td>
                                <td>
                                    <button onClick={ () => handleDeleteButton(aluno.id)}>
                                        <TiDelete/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </TableAlunos>
            </TableContainer>
        </Container>
    )
}