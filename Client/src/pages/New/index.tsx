import { Container, Content, Form, ButtonAdd } from "./style";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputMask from 'react-input-mask';

import { Header } from "../../components/Header";
import { createAluno } from "../../services/AlunosService";

export function New () {
    const [ name, setName ] = useState('');
    const [ grade1, setGrade1 ] = useState('');
    const [ grade2, setGrade2 ] = useState('');
    const [ grade3, setGrade3 ] = useState('');
    const [ grade4, setGrade4 ] = useState('');
    const [ grade5, setGrade5 ] = useState('');
    const [ frequency, setFrequency ] = useState('');
    const [errorGrade1, setErrorGrade1] = useState('');
    const [errorGrade2, setErrorGrade2] = useState('');
    const [errorGrade3, setErrorGrade3] = useState('');
    const [errorGrade4, setErrorGrade4] = useState('');
    const [errorGrade5, setErrorGrade5] = useState('');
    const [errorFrequency, setErroFrequency] = useState('');

    const navigate = useNavigate();

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setName(value);
    };
    
    console.log(name);

    const handleChangeGrade1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (parseFloat(value) < 0 || parseFloat(value) > 10) {
            setErrorGrade1('Nota inválida, é aceito apenas valores entre 0 e 10!');
            return;
        } else {
            setErrorGrade1('');
            setGrade1(value);
        }
    };

    const handleChangeGrade2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (parseFloat(value) < 0 || parseFloat(value) > 10) {
            setErrorGrade2('Nota inválida, é aceito apenas valores entre 0 e 10!');
            return;
        } else {
            setErrorGrade2('');
            setGrade2(value);
        }
    };

    const handleChangeGrade3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (parseFloat(value) < 0 || parseFloat(value) > 10) {
            setErrorGrade3('Nota inválida, é aceito apenas valores entre 0 e 10!');
            return;
        } else {
            setErrorGrade3('');
            setGrade3(value);
        }
    };

    const handleChangeGrade4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (parseFloat(value) < 0 || parseFloat(value) > 10) {
            setErrorGrade4('Nota inválida, é aceito apenas valores entre 0 e 10!');
            return;
        } else {
            setErrorGrade4('');
            setGrade4(value);
        }
    };

    const handleChangeGrade5 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (parseFloat(value) < 0 || parseFloat(value) > 10) {
            setErrorGrade5('Nota inválida, é aceito apenas valores entre 0 e 10!');
            return;
        } else {
            setErrorGrade5('');
            setGrade5(value);
        }
    };

    const handleChangeFrequency = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (parseFloat(value) < 0 || parseFloat(value) > 100) {
            setErroFrequency('Valor inválido, digite apenas valores entre 000.0 e 100.0!');
            return;
        } else {
            setErroFrequency('');
            setFrequency(value);
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const newAluno = {
            "name": name.trim(),
            "grade1": parseFloat(grade1),
            "grade2": parseFloat(grade2),
            "grade3": parseFloat(grade3),
            "grade4": parseFloat(grade4),
            "grade5": parseFloat(grade5),
            "frequency": parseFloat(frequency)
        };

        try {
            if (errorGrade1 !== '' || errorGrade2 !== '' || errorGrade3 !== '' || errorGrade4 !== '' || errorGrade5 !== '' || errorFrequency !== '') {
                alert('Preencha todos os campos corretamente!');
                return;
            } else {
                createAluno(newAluno);
                navigate('/');
                window.location.reload();
            }
        } catch (error) {
            console.error('Erro ao adicionar aluno:', error);
        }
    }

    return(
        <Container>
            <Header />

            <Content>
                <header>
                    <h1>Adicionar aluno</h1>
                    <Link to="/">voltar</Link>
                </header>
                    
                <Form id="FormAdd">
                    <label>
                        Nome e sobrenome
                        <InputMask mask="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" maskChar=" " onChange={handleChangeName} placeholder="Nome do aluno" />
                    </label>

                    <label>
                        Nota na disciplina de Matemática
                        <InputMask mask="99.9" maskChar=" " onChange={handleChangeGrade1} placeholder="00.0 a 10.0" />
                        {errorGrade1 && <p style={{ color: 'red', fontSize: '15px', marginTop: '.3rem' }}>{errorGrade1}</p>}
                    </label>

                    <label>
                        Nota na disciplina de Física
                        <InputMask mask="99.9" maskChar=" " onChange={handleChangeGrade2} placeholder="00.0 a 10.0" />
                        {errorGrade2 && <p style={{ color: 'red', fontSize: '15px', marginTop: '.3rem' }}>{errorGrade2}</p>}
                    </label>

                    <label>
                        Nota na disciplina de Química
                        <InputMask mask="99.9" maskChar=" " onChange={handleChangeGrade3} placeholder="00.0 a 10.0" />
                        {errorGrade3 && <p style={{ color: 'red', fontSize: '15px', marginTop: '.3rem' }}>{errorGrade3}</p>}
                    </label>

                    <label>
                        Nota na disciplina de Biologia
                        <InputMask mask="99.9" maskChar=" " onChange={handleChangeGrade4} placeholder="00.0 a 10.0" />
                        {errorGrade4 && <p style={{ color: 'red', fontSize: '15px', marginTop: '.3rem' }}>{errorGrade4}</p>}
                    </label>

                    <label>
                        Nota na disciplina de Estatística
                        <InputMask mask="99.9" maskChar=" " onChange={handleChangeGrade5} placeholder="00.0 a 10.0" />
                        {errorGrade5 && <p style={{ color: 'red', fontSize: '15px', marginTop: '.3rem' }}>{errorGrade5}</p>}
                    </label>

                    <label>
                        Frequência do aluno
                        <InputMask mask="999.9%" maskChar=" " onChange={handleChangeFrequency} placeholder="000.0% a 100.0%" />
                        {errorFrequency && <p style={{ color: 'red', fontSize: '15px', marginTop: '.3rem' }}>{errorFrequency}</p>}
                    </label>

                    <ButtonAdd onClick={handleSubmit}>
                        Salvar
                    </ButtonAdd>
                </Form>
            </Content>
        </Container>
    )
}