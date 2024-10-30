import { Container, DashBoard, AverageGrade, ContainerLists, ListAlunos } from './style'

import { useState, useEffect } from 'react';
import { AlunoType } from '../../types/AlunoType';
import { fetchAllAlunos } from '../../services/AlunosService';

export function Overview () {
    const [alunos, setAlunos] = useState<AlunoType[] | undefined>(undefined);
    const [mediaMatematica, setMediaMatematica] = useState(0);
    const [mediaFisica, setMediaFisica] = useState(0);
    const [mediaQuimica, setMediaQuimica] = useState(0);
    const [mediaBiologia, setMediaBiologia] = useState(0);
    const [mediaEstatistica, setMediaEstatistica] = useState(0);
    const [mediaFrequenciaGeral, setMediaFrequenciaGeral] = useState(0);
    const [alunosComFrequenciaBaixa, setAlunosComFrequenciaBaixa] = useState<AlunoType[] | undefined>(undefined);
    const [alunosAcimaDaMediaMatematica, setAlunosAcimaDaMediaMatematica] = useState<AlunoType[] | undefined>(undefined);
    const [alunosAcimaDaMediaFisica, setAlunosAcimaDaMediaFisica] = useState<AlunoType[] | undefined>(undefined);
    const [alunosAcimaDaMediaQuimica, setAlunosAcimaDaMediaQuimica] = useState<AlunoType[] | undefined>(undefined);
    const [alunosAcimaDaMediaBiologia, setAlunosAcimaDaMediaBiologia] = useState<AlunoType[] | undefined>(undefined);
    const [alunosAcimaDaMediaEstatistica, setAlunosAcimaDaMediaEstatistica] = useState<AlunoType[] | undefined>(undefined);

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

    useEffect(() => {
        let sumMatematica = 0;
        let sumFisica = 0;
        let sumQuimica = 0;
        let sumBiologia = 0;
        let sumEstatistica = 0;
        let sumfrequenciaGeral = 0;

        alunos?.map(aluno => {
            sumMatematica += aluno.grade1;
            sumFisica += aluno.grade2;
            sumQuimica += aluno.grade3;
            sumBiologia += aluno.grade4;
            sumEstatistica += aluno.grade5;
            sumfrequenciaGeral += aluno.frequency;

            if (alunos) {
                const alunosBaixaFrequencia = alunos.filter(aluno => aluno.frequency < 75);
                setAlunosComFrequenciaBaixa(alunosBaixaFrequencia);

                const alunosAcimaDaMediaMatematica = alunos.filter(aluno => aluno.grade1 > mediaMatematica);
                setAlunosAcimaDaMediaMatematica(alunosAcimaDaMediaMatematica);

                const alunosAcimaDaMediaFisica = alunos.filter(aluno => aluno.grade2 > mediaFisica);
                setAlunosAcimaDaMediaFisica(alunosAcimaDaMediaFisica);

                const alunosAcimaDaMediaQuimica = alunos.filter(aluno => aluno.grade3 > mediaQuimica);
                setAlunosAcimaDaMediaQuimica(alunosAcimaDaMediaQuimica);

                const alunosAcimaDaMediaBiologia = alunos.filter(aluno => aluno.grade4 > mediaBiologia);
                setAlunosAcimaDaMediaBiologia(alunosAcimaDaMediaBiologia);

                const alunosAcimaDaMediaEstatistica = alunos.filter(aluno => aluno.grade5 > mediaEstatistica);
                setAlunosAcimaDaMediaEstatistica(alunosAcimaDaMediaEstatistica);
            }
        })

        setMediaMatematica(sumMatematica / (alunos?.length || 1));
        setMediaFisica(sumFisica / (alunos?.length || 1));
        setMediaQuimica(sumQuimica / (alunos?.length || 1));
        setMediaBiologia(sumBiologia / (alunos?.length || 1));
        setMediaEstatistica(sumEstatistica / (alunos?.length || 1));
        setMediaFrequenciaGeral(sumfrequenciaGeral / (alunos?.length || 1));
    }, [alunos]);

    return (
        <Container>
            <h1>Visão Geral</h1>

            <DashBoard>
                <AverageGrade>
                    <div>
                        <h2>Média Matemática</h2>
                        <p>{mediaMatematica.toFixed(1)}</p>
                    </div>
                    <div>
                        <h2>Média Física</h2>
                        <p>{mediaFisica.toFixed(1)}</p>
                    </div>
                    <div>
                        <h2>Média Química</h2>
                        <p>{mediaQuimica.toFixed(1)}</p>
                    </div>
                    <div>
                        <h2>Média Biologia</h2>
                        <p>{mediaBiologia.toFixed(1)}</p>
                    </div>
                    <div>
                        <h2>Média Estatística</h2>
                        <p>{mediaEstatistica.toFixed(1)}</p>
                    </div>
                    <div>
                        <h2>Frequência Geral</h2>
                        <p>{mediaFrequenciaGeral.toFixed(1)}%</p>
                    </div>
                </AverageGrade>

                <ContainerLists>
                    <ListAlunos>
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
                                {alunosComFrequenciaBaixa?.map((aluno) => (
                                    <tr key={aluno.id}>
                                        <td>{aluno.name}</td>
                                        <td>{aluno.frequency.toFixed(1)}%</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h2>Alunos acima da média em Matemática</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Média</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alunosAcimaDaMediaMatematica?.map((aluno) => (
                                        <tr key={aluno.id}>
                                            <td>{aluno.name}</td>
                                            <td>{aluno.grade1}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h2>Alunos acima da média em Física</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Média</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alunosAcimaDaMediaFisica?.map((aluno) => (
                                        <tr key={aluno.id}>
                                            <td>{aluno.name}</td>
                                            <td>{aluno.grade2}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h2>Alunos acima da média em Química</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Média</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alunosAcimaDaMediaQuimica?.map((aluno) => (
                                        <tr key={aluno.id}>
                                            <td>{aluno.name}</td>
                                            <td>{aluno.grade3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <h2>Alunos acima da média em Biologia</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Média</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alunosAcimaDaMediaBiologia?.map((aluno) => (
                                        <tr key={aluno.id}>
                                            <td>{aluno.name}</td>
                                            <td>{aluno.grade4}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h2>Alunos acima da média em Estatística</h2>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Média</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alunosAcimaDaMediaEstatistica?.map((aluno) => (
                                        <tr key={aluno.id}>
                                            <td>{aluno.name}</td>
                                            <td>{aluno.grade5}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </ListAlunos>
                </ContainerLists>
            </DashBoard>
        </Container>
    )
}