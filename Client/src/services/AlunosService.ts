import axios from 'axios';
import { newAlunoType } from '../types/AlunoType';

const URL_API = "http://localhost:8080/alunos";

export async function fetchAllAlunos() {
    try {
        const response = await axios.get(URL_API);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar alunos:', error);
        throw error;
    }
}

// export async function fetchAlunoById(id: number) {
//     try {
//         const response = await axios.get(`${URL_API}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Erro ao buscar aluno:', error);
//         throw error;
//     }
// }

export async function createAluno(aluno: newAlunoType) {
    try {
        const response = await axios.post(URL_API, aluno);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar aluno:', error);
        throw error;
    }
}

export async function deleteAlunoById(id: number) {
    try {
        const response = await axios.delete(`${URL_API}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar aluno:', error);
        throw error;
    }
}